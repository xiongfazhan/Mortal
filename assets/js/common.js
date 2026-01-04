// 公共脚本 - 被所有页面引用

// 平滑滚动到指定区域
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Chart.js 全局默认配置
if (typeof Chart !== 'undefined') {
    Chart.defaults.font.family = "'Noto Sans SC', sans-serif";
    Chart.defaults.color = '#78716c';
}

// 通用图表创建函数
function createChart(canvasId, type, data, options = {}) {
    const ctx = document.getElementById(canvasId)?.getContext('2d');
    if (!ctx) return null;

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 15
                }
            }
        }
    };

    return new Chart(ctx, {
        type,
        data,
        options: { ...defaultOptions, ...options }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 添加页面加载动画
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.3s ease-in';
        document.body.style.opacity = '1';
    });
});
