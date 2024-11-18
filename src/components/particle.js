// Particle animation
export class ParticleAnimation {
    constructor(el, { quantity = 30, staticity = 50, ease = 50 } = {}) {
        this.canvas = el;
        if (!this.canvas) return;
        this.context = this.canvas.getContext('2d');
        this.dpr = window.devicePixelRatio || 1;
        this.settings = { quantity, staticity, ease };
        this.circles = [];
        this.mouse = { x: 0, y: 0 };
        this.canvasSize = { w: 0, h: 0 };

        // Bind methods
        this.onMouseMove = this.onMouseMove.bind(this);
        this.initCanvas = this.initCanvas.bind(this);
        this.resizeCanvas = this.resizeCanvas.bind(this);
        this.drawParticles = this.drawParticles.bind(this);
        this.remapValue = this.remapValue.bind(this);
        this.animate = this.animate.bind(this);

        this.init();
    }

    init() {
        this.initCanvas();
        window.addEventListener('resize', this.resizeCanvas);
        window.addEventListener('mousemove', this.onMouseMove);
        this.animate();
    }

    initCanvas() {
        this.resizeCanvas();
        this.drawParticles();
    }

    onMouseMove(event) {
        const { clientX, clientY } = event;
        const rect = this.canvas.getBoundingClientRect();
        const x = clientX - rect.left - this.canvasSize.w / 2;
        const y = clientY - rect.top - this.canvasSize.h / 2;
        if (x < this.canvasSize.w / 2 && x > -this.canvasSize.w / 2 && y < this.canvasSize.h / 2 && y > -this.canvasSize.h / 2) {
            this.mouse = { x, y };
        }
    }

    resizeCanvas() {
        this.circles.length = 0;
        this.canvasSize.w = this.canvas.offsetWidth;
        this.canvasSize.h = this.canvas.offsetHeight;
        this.canvas.width = this.canvasSize.w * this.dpr;
        this.canvas.height = this.canvasSize.h * this.dpr;
        this.canvas.style.width = `${this.canvasSize.w}px`;
        this.canvas.style.height = `${this.canvasSize.h}px`;
        this.context.scale(this.dpr, this.dpr);
    }

    circleParams() {
        const x = Math.random() * this.canvasSize.w;
        const y = Math.random() * this.canvasSize.h;
        const size = Math.floor(Math.random() * 2) + 1;
        const targetAlpha = (Math.random() * 3 + 0.1).toFixed(1);
        const dx = (Math.random() - 0.5) * 0.2;
        const dy = (Math.random() - 0.5) * 0.2;
        const magnetism = 0.1 + Math.random() * 4;
        return { x, y, translateX: 0, translateY: 0, size, alpha: 0, targetAlpha, dx, dy, magnetism };
    }

    drawCircle(circle, update = false) {
        const { x, y, translateX, translateY, size, alpha } = circle;
        this.context.translate(translateX, translateY);
        this.context.beginPath();
        this.context.arc(x, y, size, 0, 2 * Math.PI);
        this.context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        this.context.fill();
        this.context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

        if (!update) {
            this.circles.push(circle);
        }
    }

    clearContext() {
        this.context.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    }

    drawParticles() {
        this.clearContext();
        for (let i = 0; i < this.settings.quantity; i++) {
            const circle = this.circleParams();
            this.drawCircle(circle);
        }
    }

    remapValue(value, start1, end1, start2, end2) {
        return Math.max(0, (value - start1) * (end2 - start2) / (end1 - start1) + start2);
    }

    animate() {
        this.clearContext();
        const { w, h } = this.canvasSize;

        this.circles.forEach((circle, i) => {
            const edges = [
                circle.x + circle.translateX - circle.size, // left
                w - circle.x - circle.translateX - circle.size, // right
                circle.y + circle.translateY - circle.size, // top
                h - circle.y - circle.translateY - circle.size, // bottom
            ];
            const closestEdge = Math.min(...edges);
            const remapClosestEdge = this.remapValue(closestEdge, 0, 20, 0, 1).toFixed(2);

            // Update alpha based on proximity to canvas edge
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                circle.alpha = Math.min(circle.alpha, circle.targetAlpha);
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }

            // Update position and translate values
            circle.x += circle.dx;
            circle.y += circle.dy;
            circle.translateX += ((this.mouse.x / (this.settings.staticity / circle.magnetism)) - circle.translateX) / this.settings.ease;
            circle.translateY += ((this.mouse.y / (this.settings.staticity / circle.magnetism)) - circle.translateY) / this.settings.ease;

            // Remove and replace circles when out of bounds
            if (circle.x < -circle.size || circle.x > w + circle.size || circle.y < -circle.size || circle.y > h + circle.size) {
                this.circles.splice(i, 1);
                this.drawCircle(this.circleParams());
            } else {
                this.drawCircle(circle, true);
            }
        });

        window.requestAnimationFrame(this.animate);
    }
}

// Init ParticleAnimation
const canvasElements = document.querySelectorAll('[data-particle-animation]');
canvasElements.forEach(canvas => {
    const options = {
        quantity: canvas.dataset.particleQuantity,
        staticity: canvas.dataset.particleStaticity,
        ease: canvas.dataset.particleEase,
    };
    new ParticleAnimation(canvas, options);
});
