// Check if dark mode is active
const isDarkMode = document.body.classList.contains('dark');

// Initial chart setup with improved styling
const chartOptions1 = {
    layout: {
        background: { type: 'solid', color: isDarkMode ? '#111827' : 'white' },
        textColor: isDarkMode ? '#f3f4f6' : '#1f2937',
        fontFamily: 'Inter, sans-serif',
    },
    grid: {
        vertLines: {
            color: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)',
            style: 1, // Solid line style
        },
        horzLines: {
            color: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)',
            style: 1, // Solid line style
        },
    },
    crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
        vertLine: {
            color: isDarkMode ? 'rgba(156, 163, 175, 0.5)' : 'rgba(75, 85, 99, 0.3)',
            width: 1,
            style: 2, // Dashed line
        },
        horzLine: {
            color: isDarkMode ? 'rgba(156, 163, 175, 0.5)' : 'rgba(75, 85, 99, 0.3)',
            width: 1,
            style: 2, // Dashed line
        },
    },
    timeScale: {
        visible: true,
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        timeVisible: true,
        secondsVisible: false,
    },
    rightPriceScale: {
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        scaleMargins: {
            top: 0.1, 
            bottom: 0.2,
        },
    },
    
};

const chartOptions2 = {
    layout: {
        background: { type: 'solid', color: isDarkMode ? '#111827' : 'white' },
        textColor: isDarkMode ? '#f3f4f6' : '#1f2937',
        fontFamily: 'Inter, sans-serif',
    },
    grid: {
        vertLines: {
            color: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)',
            style: 1,
        },
        horzLines: {
            color: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)',
            style: 1,
        },
    },
    crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
        vertLine: {
            color: isDarkMode ? 'rgba(156, 163, 175, 0.5)' : 'rgba(75, 85, 99, 0.3)',
            width: 1,
            style: 2,
        },
        horzLine: {
            color: isDarkMode ? 'rgba(156, 163, 175, 0.5)' : 'rgba(75, 85, 99, 0.3)',
            width: 1,
            style: 2,
        },
    },
    timeScale: {
        visible: true,
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        timeVisible: true,
        secondsVisible: false,
    },
    rightPriceScale: {
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        scaleMargins: {
            top: 0.1, 
            bottom: 0.2,
        },
    },

};

const chartOptions3 = {
    layout: {
        background: { type: 'solid', color: isDarkMode ? '#111827' : 'white' },
        textColor: isDarkMode ? '#f3f4f6' : '#1f2937',
        fontFamily: 'Inter, sans-serif',
    },
    grid: {
        vertLines: {
            color: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)',
            style: 1,
        },
        horzLines: {
            color: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.8)',
            style: 1,
        },
    },
    crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
        vertLine: {
            color: isDarkMode ? 'rgba(156, 163, 175, 0.5)' : 'rgba(75, 85, 99, 0.3)',
            width: 1,
            style: 2,
        },
        horzLine: {
            color: isDarkMode ? 'rgba(156, 163, 175, 0.5)' : 'rgba(75, 85, 99, 0.3)',
            width: 1,
            style: 2,
        },
    },
    timeScale: {
        visible: true,
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        timeVisible: true,
        secondsVisible: false,
    },
    rightPriceScale: {
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        scaleMargins: {
            top: 0.1, 
            bottom: 0.2,
        },
    },

};

const chart = LightweightCharts.createChart(document.getElementById('chart'), chartOptions1);
const candlestickSeries = chart.addSeries(
    LightweightCharts.CandlestickSeries,
    {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    }
);
const emaLine = chart.addSeries(
    LightweightCharts.LineSeries,
    { color: 'blue', lineWidth: 2 }
);

const rsiChart = LightweightCharts.createChart(document.getElementById('rsiChart'),chartOptions2);
const rsiLine = rsiChart.addSeries(
    LightweightCharts.LineSeries,
    { color: 'red', lineWidth: 2}
);

const macdChart = LightweightCharts.createChart(
    document.getElementById('macdChart'),
    chartOptions3
);

const macdLine = macdChart.addSeries(
    LightweightCharts.LineSeries,
    { color: '#3b82f6', lineWidth: 2 }
);

const signalLine = macdChart.addSeries(
    LightweightCharts.LineSeries,
    { color: '#f59e0b', lineWidth: 2 }
);

const histSeries = macdChart.addSeries(
    LightweightCharts.HistogramSeries,
    {}
);

const adxChart = LightweightCharts.createChart(
    document.getElementById('adxChart'),
    chartOptions3
);

const adxLine = adxChart.addSeries(
    LightweightCharts.LineSeries,
    { color: '#8b5cf6', lineWidth: 2 }
);

const upperBandLine = chart.addSeries(
    LightweightCharts.LineSeries,
    {
        color: '#22c55e',
        lineWidth: 2
    }
);

const middleBandLine = chart.addSeries(
    LightweightCharts.LineSeries,
    {
        color: '#f59e0b',
        lineWidth: 2
    }
);

const lowerBandLine = chart.addSeries(
    LightweightCharts.LineSeries,
    {
        color: '#ef4444',
        lineWidth: 2
    }
);

const stochChart = LightweightCharts.createChart(
    document.getElementById('stochChart'),
    chartOptions2
);

const stochKLine = stochChart.addSeries(
    LightweightCharts.LineSeries,
    {
        color: '#3b82f6',
        lineWidth: 2
    }
);

const stochDLine = stochChart.addSeries(
    LightweightCharts.LineSeries,
    {
        color: '#f97316',
        lineWidth: 2
    }
);

let autoUpdateInterval;
// Below is a simple function to determine RSI signal based on standard thresholds which is not commited to the backend yet but can be used for frontend display or future enhancements. It returns a label and color for the RSI signal.

function getRSISignal(rsi) {
    if (rsi > 70) return { label: "Strong Sell", color: "#ef4444" };
    if (rsi > 60) return { label: "Sell", color: "#f97316" };
    if (rsi >= 40) return { label: "Neutral", color: "#9ca3af" };
    if (rsi >= 30) return { label: "Buy", color: "#22c55e" };
    return { label: "Strong Buy", color: "#16a34a" };
}
// Below is a simple function to determine MACD signal based on the difference between MACD and Signal line. It returns a label, color, and angle for the MACD signal which can be used for frontend display or future enhancements.
function getMACDSignal(macd, signal) {

    const diff = macd - signal;

    if (diff > 1) return { label: "Strong Buy", color: "#16a34a", angle: 150 };
    if (diff > 0) return { label: "Buy", color: "#22c55e", angle: 120 };
    if (Math.abs(diff) < 0.05) return { label: "Neutral", color: "#9ca3af", angle: 90 };
    if (diff < -1) return { label: "Strong Sell", color: "#dc2626", angle: 30 };

    return { label: "Sell", color: "#f97316", angle: 60 };
}
// Below is a simple function to determine ADX signal based on standard thresholds. It returns a label, color, and angle for the ADX signal which can be used for frontend display or future enhancements.
function getADXSignal(adx) {

    if (adx > 50) return { label: "Strong Buy", color: "#16a34a", angle:162-90 };
    if (adx > 25) return { label: "Buy", color: "#22c55e", angle: 126-90 };
    if (adx < 25) return { label: "Neutral", color: "#E6E9E8", angle: 90-90 };
    return { label: "No Trend", color: "#ef4444", angle: 45 };
}
// Below is a simple function to determine Bollinger Bands signal based on the position of the price relative to the upper, middle, and lower bands as well as the bandwidth. It returns a label, color, and angle for the Bollinger Bands signal which can be used for frontend display or future enhancements.
function getBollingerSignal(
    price,
    upper,
    middle,
    lower
) {

    const bandWidth = upper - lower;

    // Squeeze detection
    const squeezeThreshold = middle * 0.03;

    // =====================================================
    // STRONG SELL
    // =====================================================

    if (price > upper) {

        return {
            label: "Strong Sell",
            color: "#dc2626",
            angle: -54
        };
    }

    // =====================================================
    // STRONG BUY
    // =====================================================

    if (price < lower) {

        return {
            label: "Strong Buy",
            color: "#16a34a",
            angle: 72
        };
    }

    // =====================================================
    // NEUTRAL / SQUEEZE
    // =====================================================

    if (bandWidth < squeezeThreshold) {

        return {
            label: "Neutral / Squeeze",
            color: "#9ca3af",
            angle: 0
        };
    }

    // =====================================================
    // SELL
    // =====================================================

    if (price > middle) {

        return {
            label: "Sell",
            color: "#f97316",
            angle: -36
        };
    }

    // =====================================================
    // BUY
    // =====================================================

    if (price < middle) {

        return {
            label: "Buy",
            color: "#22c55e",
            angle: 36
        };
    }

    // =====================================================
    // DEFAULT
    // =====================================================

    return {
        label: "Neutral",
        color: "#9ca3af",
        angle: 0
    };
}
// Below is a simple function to determine Stochastic Oscillator signal based on the %K and %D values. It returns a label, color, and angle for the Stochastic signal which can be used for frontend display or future enhancements.
function getStochasticSignal(
    k,
    d
) {

    // STRONG BUY
    if (
        k < 20 &&
        k > d
    ) {

        return {
            label: "Strong Buy",
            color: "#16a34a",
            angle: 72
        };
    }

    // STRONG SELL
    if (
        k > 80 &&
        k < d
    ) {

        return {
            label: "Strong Sell",
            color: "#dc2626",
            angle: -72
        };
    }

    // BUY
    if (k > d) {

        return {
            label: "Buy",
            color: "#22c55e",
            angle: 36
        };
    }

    // SELL
    if (k < d) {

        return {
            label: "Sell",
            color: "#f97316",
            angle: -36
        };
    }

    // NEUTRAL
    return {

        label: "Neutral",

        color: "#9ca3af",

        angle: 0
    };
}

function fetchData(ticker, timeframe, emaPeriod) {

    let indicators = Array.from(
        document.getElementById('indicators').selectedOptions
    ).map(opt => opt.value);

    if (indicators.length === 0) {
        indicators = ['ema']; // fallback
    }

    indicators = indicators.join(',');

    fetch(`/api/data/${ticker}/${timeframe}/${emaPeriod}?indicators=${indicators}`)
        .then(response => response.json())
        .then(data => {

            console.log("API DATA:", data);

            if (data.candlestick) {
                candlestickSeries.setData(data.candlestick);

                // 🔥 IMPORTANT: auto-fit chart
                chart.timeScale().fitContent();
            }

            if (data.ema) {
                emaLine.setData(data.ema);
            } else {
                emaLine.setData([]);
            }
            // Below is a simple function to determine RSI and gauge display logic. It checks if RSI data is available and valid, then updates the RSI chart and gauge accordingly. It also calculates the latest RSI value to determine the signal and rotate the gauge needle.

            if (data.rsi && data.rsi.length > 0) {

                // ✅ FIX: FILTER NULL VALUES FIRST
                const filteredRSI = data.rsi
                    .filter(d => d.value !== null && !isNaN(d.value));

                if (filteredRSI.length > 0) {

                    rsiLine.setData(filteredRSI);
                    document.getElementById('rsiChart').style.display = 'block';
                    rsiChart.timeScale().fitContent();

                    // ✅ GET LATEST VALID RSI
                    const latestRSI = filteredRSI[filteredRSI.length - 1].value;

                    document.getElementById("rsiSignalContainer").classList.remove("hidden");

                    const signal = getRSISignal(latestRSI);

                    const text = document.getElementById("rsiSignalText");
                    text.innerText = signal.label;
                    text.style.backgroundColor = signal.color;

                    const safeRSI = Math.max(0, Math.min(100, latestRSI));

                    // ✅ FIXED ROTATION (RIGHT → LEFT)
                    const angle = 90 - (safeRSI / 100) * 180;

                    document.getElementById("rsiNeedle")
                        .setAttribute("transform", `rotate(${angle} 100 100)`);

                } else {
                    // ❌ All values invalid → hide
                    rsiLine.setData([]);
                    document.getElementById('rsiChart').style.display = 'none';
                    document.getElementById("rsiSignalContainer").classList.add("hidden");
                }

            } else {
                // ❌ RSI not selected
                rsiLine.setData([]);
                document.getElementById('rsiChart').style.display = 'none';
                document.getElementById("rsiSignalContainer").classList.add("hidden");
            }
            if (data.macd && data.macd.length > 0) {

                // ✅ ONE FILTER FOR ALL
                const cleanMacd = data.macd.filter(d =>
                    d.macd !== null && !isNaN(d.macd) &&
                    d.signal !== null && !isNaN(d.signal) &&
                    d.hist !== null && !isNaN(d.hist)
                );

                if (cleanMacd.length > 0) {

                    const macdData = cleanMacd.map(d => ({
                        time: d.time,
                        value: d.macd
                    }));

                    const signalData = cleanMacd.map(d => ({
                        time: d.time,
                        value: d.signal
                    }));

                    const histData = cleanMacd.map(d => ({
                        time: d.time,
                        value: d.hist,
                        color: d.hist >= 0 ? '#10b981' : '#ef4444'
                    }));

                    macdLine.setData(macdData);
                    signalLine.setData(signalData);
                    histSeries.setData(histData);

                    document.getElementById('macdChart').style.display = 'block';
                    macdChart.timeScale().fitContent();
                    // ✅ GET LAST VALUE
                    const last = cleanMacd[cleanMacd.length - 1];

                    if (last) {

                        document.getElementById("macdSignalContainer").classList.remove("hidden");

                        const signal = getMACDSignal(last.macd, last.signal);

                        // text
                        const text = document.getElementById("macdSignalText");
                        text.innerText = signal.label;
                        text.style.backgroundColor = signal.color;

                        // needle
                        document.getElementById("macdNeedle")
                            .setAttribute("transform", `rotate(${signal.angle} 100 100)`);
                    }

                } else {
                    macdLine.setData([]);
                    signalLine.setData([]);
                    histSeries.setData([]);
                    document.getElementById('macdChart').style.display = 'none';
                }

            } else {
                macdLine.setData([]);
                signalLine.setData([]);
                histSeries.setData([]);
                document.getElementById('macdChart').style.display = 'none';
                document.getElementById("macdSignalContainer").classList.add("hidden");
            }
            if (data.adx && data.adx.length > 0) {

                const cleanADX = data.adx.filter(d =>
                    d.adx !== null && !isNaN(d.adx)
                );

                if (cleanADX.length > 0) {

                    const adxData = cleanADX.map(d => ({
                        time: d.time,
                        value: d.adx
                    }));

                    adxLine.setData(adxData);
                    document.getElementById('adxChart').style.display = 'block';
                    adxChart.timeScale().fitContent();

                    // 🔥 SIGNAL
                    const last = cleanADX[cleanADX.length - 1];

                    if (last) {
                        document.getElementById("adxSignalContainer").classList.remove("hidden");

                        const signal = getADXSignal(last.adx);

                        const text = document.getElementById("adxSignalText");
                        text.innerText = signal.label;
                        text.style.backgroundColor = signal.color;

                        document.getElementById("adxNeedle")
                            .setAttribute("transform", `rotate(${signal.angle} 100 100)`);
                    }

                } else {
                    adxLine.setData([]);
                    document.getElementById('adxChart').style.display = 'none';
                }

            } else {
                adxLine.setData([]);
                document.getElementById('adxChart').style.display = 'none';
                document.getElementById("adxSignalContainer").classList.add("hidden");
            }
            // Below is a simple function to determine Bollinger Bands display logic. It checks if Bollinger Bands data is available and valid, then updates the upper, middle, and lower band lines accordingly. If data is missing or invalid, it clears the bands from the chart. (not commited)
            if (data.bollinger && data.bollinger.length > 0) {

                const upperData = data.bollinger
                    .filter(d => d.upper !== null)
                    .map(d => ({
                        time: d.time,
                        value: d.upper
                    }));

                const middleData = data.bollinger
                    .filter(d => d.middle !== null)
                    .map(d => ({
                        time: d.time,
                        value: d.middle
                    }));

                const lowerData = data.bollinger
                    .filter(d => d.lower !== null)
                    .map(d => ({
                        time: d.time,
                        value: d.lower
                    }));

                upperBandLine.setData(upperData);
                middleBandLine.setData(middleData);
                lowerBandLine.setData(lowerData);

                // =====================================================
                // BOLLINGER GAUGE SIGNAL
                // =====================================================

                const validBB = data.bollinger.filter(
                    d =>
                        d.upper !== null &&
                        d.middle !== null &&
                        d.lower !== null
                );

                if (validBB.length > 0) {

                    const latestBB = validBB[validBB.length - 1];

                    const latestPrice =
                        data.candlestick[
                            data.candlestick.length - 1
                        ].close;

                    // GET SIGNAL
                    const signal = getBollingerSignal(
                        latestPrice,
                        latestBB.upper,
                        latestBB.middle,
                        latestBB.lower
                    );

                    // SHOW GAUGE
                    document.getElementById(
                        "bbSignalContainer"
                    ).classList.remove("hidden");

                    // UPDATE LABEL
                    const text =
                        document.getElementById(
                            "bbSignalText"
                        );

                    text.innerText = signal.label;

                    text.style.backgroundColor =
                        signal.color;

                    // ROTATE NEEDLE
                    document.getElementById("bbNeedle")
                        .setAttribute(
                            "transform",
                            `rotate(${signal.angle} 100 100)`
                        );

                } else {

                    document.getElementById(
                        "bbSignalContainer"
                    ).classList.add("hidden");
                }

            } else {

                upperBandLine.setData([]);
                middleBandLine.setData([]);
                lowerBandLine.setData([]);

                // HIDE GAUGE
                document.getElementById(
                    "bbSignalContainer"
                ).classList.add("hidden");
            }
// Below is a simple function to determine Stochastic Oscillator display logic. It checks if Stochastic data is available and valid, then updates the %K and %D lines accordingly. If data is missing or invalid, it clears the lines from the chart and hides it. (not commited)
            if (
                    data.stochastic &&
                    data.stochastic.length > 0
                ) {

                    const kData = data.stochastic
                        .filter(d => d.k !== null)
                        .map(d => ({
                            time: d.time,
                            value: d.k
                        }));

                    const dData = data.stochastic
                        .filter(d => d.d !== null)
                        .map(d => ({
                            time: d.time,
                            value: d.d
                        }));

                    stochKLine.setData(kData);

                    stochDLine.setData(dData);

                    document.getElementById(
                        'stochChart'
                    ).style.display = 'block';

                    stochChart.timeScale().fitContent();

                    // =====================================================
                    // STOCHASTIC GAUGE SIGNAL
                    // =====================================================

                    const validStoch = data.stochastic.filter(
                        d =>
                            d.k !== null &&
                            d.d !== null
                    );

                    if (validStoch.length > 0) {

                        const latestStoch =
                            validStoch[
                                validStoch.length - 1
                            ];

                        // GET SIGNAL
                        const signal = getStochasticSignal(
                            latestStoch.k,
                            latestStoch.d
                        );

                        // SHOW GAUGE
                        document.getElementById(
                            "stochSignalContainer"
                        ).classList.remove("hidden");

                        // UPDATE TEXT
                        const text =
                            document.getElementById(
                                "stochSignalText"
                            );

                        text.innerText = signal.label;

                        text.style.backgroundColor =
                            signal.color;

                        // ROTATE NEEDLE
                        document.getElementById(
                            "stochNeedle"
                        ).setAttribute(
                            "transform",
                            `rotate(${signal.angle} 100 100)`
                        );

                    } else {

                        document.getElementById(
                            "stochSignalContainer"
                        ).classList.add("hidden");
                    }

                } else {

                    stochKLine.setData([]);

                    stochDLine.setData([]);

                    document.getElementById(
                        'stochChart'
                    ).style.display = 'none';

                    // HIDE GAUGE
                    document.getElementById(
                        "stochSignalContainer"
                    ).classList.add("hidden");
                }
                    })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
window.addEventListener('load', () => {

    // 🔥 Resize charts properly
    chart.resize(
        document.getElementById('chart').clientWidth,
        document.getElementById('chart').clientHeight
    );

    rsiChart.resize(
        document.getElementById('rsiChart').clientWidth,
        document.getElementById('rsiChart').clientHeight
    );

    macdChart.resize(
        document.getElementById('macdChart').clientWidth,
        document.getElementById('macdChart').clientHeight
    );

    adxChart.resize(
    document.getElementById('adxChart').clientWidth,
    document.getElementById('adxChart').clientHeight
    );

    chart.resize(
    document.getElementById('chart').clientWidth,
    document.getElementById('chart').clientHeight
    );

    stochChart.resize(
    document.getElementById('stochChart').clientWidth,
    document.getElementById('stochChart').clientHeight
    );

    // 🔥 Fetch initial data
    fetchData('NVDA', '1d', 20);

    // 🔥 Load watchlist
    loadWatchlist();
});

// Handle data fetching on button click
document.getElementById('fetchData').addEventListener('click', () => {
    const ticker = document.getElementById('ticker').value;
    const timeframe = document.getElementById('timeframe').value;
    const emaPeriod = document.getElementById('emaPeriod').value;
    
    fetchData(ticker, timeframe, emaPeriod);
});

// Handle auto-update functionality
document.getElementById('autoUpdate').addEventListener('change', (event) => {
    if (event.target.checked) {
        const frequency = document.getElementById('updateFrequency').value * 1000;
        autoUpdateInterval = setInterval(() => {
            const ticker = document.getElementById('ticker').value;
            const timeframe = document.getElementById('timeframe').value;
            const emaPeriod = document.getElementById('emaPeriod').value;
            fetchData(ticker, timeframe, emaPeriod);
        }, frequency);
    } else {
        clearInterval(autoUpdateInterval);
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    chart.resize(document.getElementById('chart').clientWidth, document.getElementById('chart').clientHeight);
    rsiChart.resize(document.getElementById('rsiChart').clientWidth, document.getElementById('rsiChart').clientHeight);
    ///macdChart.resize(document.getElementById('macdChart').clientWidth, document.getElementById('macdChart').clientHeight);
    //adxChart.resize(document.getElementById('adxChart').clientWidth, document.getElementById('adxChart').clientHeight);
    //stochChart.resize(document.getElementById('stochChart').clientWidth, document.getElementById('stochChart').clientHeight);
});

// Theme toggle functionality for DaisyUI
document.getElementById('themeToggle').addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const darkIcon = document.querySelector('.dark-icon');
    const lightIcon = document.querySelector('.light-icon');
    
    if (currentTheme === 'light') {
        // Switch to dark theme
        document.body.setAttribute('data-theme', 'dark');
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
        
        // Update chart options for dark theme
        chart.applyOptions({
            layout: {
                background: { type: 'solid', color: '#1f2937' },
                textColor: '#f3f4f6',
            },
            grid: {
                vertLines: {
                    color: 'rgba(55, 65, 81, 0.5)',
                },
                horzLines: {
                    color: 'rgba(55, 65, 81, 0.5)',
                },
            },
            rightPriceScale: {
                borderColor: '#374151',
            },
            timeScale: {
                borderColor: '#374151',
            },
        });
        
        rsiChart.applyOptions({
            layout: {
                background: { type: 'solid', color: '#1f2937' },
                textColor: '#f3f4f6',
            },
            grid: {
                vertLines: {
                    color: 'rgba(55, 65, 81, 0.5)',
                },
                horzLines: {
                    color: 'rgba(55, 65, 81, 0.5)',
                },
            },
            rightPriceScale: {
                borderColor: '#374151',
            },
            timeScale: {
                borderColor: '#374151',
            },
        });
    } else {
        // Switch to light theme
        document.body.setAttribute('data-theme', 'light');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
        
        // Update chart options for light theme
        chart.applyOptions({
            layout: {
                background: { type: 'solid', color: 'white' },
                textColor: '#1f2937',
            },
            grid: {
                vertLines: {
                    color: 'rgba(229, 231, 235, 0.8)',
                },
                horzLines: {
                    color: 'rgba(229, 231, 235, 0.8)',
                },
            },
            rightPriceScale: {
                borderColor: '#e5e7eb',
            },
            timeScale: {
                borderColor: '#e5e7eb',
            },
        });
        
        rsiChart.applyOptions({
            layout: {
                background: { type: 'solid', color: 'white' },
                textColor: '#1f2937',
            },
            grid: {
                vertLines: {
                    color: 'rgba(229, 231, 235, 0.8)',
                },
                horzLines: {
                    color: 'rgba(229, 231, 235, 0.8)',
                },
            },
            rightPriceScale: {
                borderColor: '#e5e7eb',
            },
            timeScale: {
                borderColor: '#e5e7eb',
            },
        });
    }
});

// Load watchlist symbols from the server with real quotes
function loadWatchlist() {
    // Get the watchlist container
    const watchlistContainer = document.getElementById('watchlist');
    const watchlistItems = document.getElementById('watchlistItems');
    
    // Check if add symbol form already exists and remove it
    const existingForm = document.getElementById('add-symbol-form');
    if (existingForm) {
        existingForm.remove();
    }
    
    // Create the add symbol form at the top
    const addForm = document.createElement('div');
    addForm.id = 'add-symbol-form';
    addForm.className = 'form-control mb-4 p-4 border-b border-base-300';
    addForm.innerHTML = `
        <div class="input-group">
            <input type="text" id="newSymbol" placeholder="Add new symbol..." 
                class="input input-bordered w-full focus:outline-primary" />
            <button id="addSymbolBtn" class="btn btn-primary">
                <i class="fas fa-plus"></i>
            </button>
        </div>
        <div id="symbolError" class="text-error text-xs mt-1 hidden"></div>
    `;
    
    // Insert form before the watchlist items
    watchlistContainer.insertBefore(addForm, watchlistItems);
    
    // Add event listeners to the form
    document.getElementById('addSymbolBtn').addEventListener('click', addSymbol);
    document.getElementById('newSymbol').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            addSymbol();
        }
    });
    
    // Show loading state in the watchlist items
    watchlistItems.innerHTML = `
        <div class="flex justify-center items-center p-8">
            <span class="loading loading-spinner loading-md text-primary"></span>
            <span class="ml-2">Loading quotes...</span>
        </div>
    `;
    
    fetch('/api/symbols')
        .then(response => response.json())
        .then(symbolsData => {
            watchlistItems.innerHTML = '';
            
            if (symbolsData.length === 0) {
                const emptyState = document.createElement('div');
                emptyState.className = 'flex flex-col items-center justify-center p-6 text-center text-opacity-70';
                emptyState.innerHTML = `
                    <i class="fas fa-list text-3xl mb-2 text-primary opacity-50"></i>
                    <p>No symbols in watchlist</p>
                    <button class="btn btn-sm btn-outline btn-primary mt-2">Add Symbol</button>
                `;
                watchlistItems.appendChild(emptyState);
                return;
            }
            
            symbolsData.forEach(symbolData => {
                const item = document.createElement('div');
                item.className = 'card bg-base-100 hover:bg-base-200 shadow-sm hover:shadow cursor-pointer transition-all group relative';
                
                // Format the data
                const price = symbolData.price ? symbolData.price.toFixed(2) : 'N/A';
                const changePercent = symbolData.change ? symbolData.change.toFixed(2) : 0;
                const isPositive = changePercent > 0;
                const changeClass = isPositive ? 'text-success' : (changePercent < 0 ? 'text-error' : 'text-gray-500');
                const changeIcon = isPositive ? 'caret-up' : (changePercent < 0 ? 'caret-down' : 'minus');
                
                // Create tooltip with more info
                const tooltipContent = `${symbolData.name || symbolData.symbol}`;
                
                item.innerHTML = `
                    <div class="card-body p-3" data-tip="${tooltipContent}">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="font-bold">${symbolData.symbol}</h3>
                                <div class="text-xs opacity-70 truncate max-w-32" title="${symbolData.name || symbolData.symbol}">
                                    ${symbolData.name || 'Yahoo Finance'}
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="font-medium">${price}</div>
                                <div class="text-xs ${changeClass}">
                                    <i class="fas fa-${changeIcon} mr-1"></i>
                                    ${changePercent}%
                                </div>
                            </div>
                        </div>
                        <button class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-error delete-symbol" data-id="${symbolData.id}">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                `;
                
                item.addEventListener('click', () => {
                    document.getElementById('ticker').value = symbolData.symbol;
                    // Add active indicator
                    document.querySelectorAll('.card.border-primary').forEach(el => {
                        el.classList.remove('border-primary', 'border');
                    });
                    item.classList.add('border-primary', 'border');
                    
                    fetchData(
                                symbolData.symbol,
                                document.getElementById('timeframe').value,
                                document.getElementById('emaPeriod').value
                            );
                });
                
                watchlistItems.appendChild(item);
            });
            
            // Add symbol removal event handlers
            document.querySelectorAll('.delete-symbol').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const symbolId = this.getAttribute('data-id');
                    if (confirm('Remove this symbol from watchlist?')) {
                        removeSymbol(symbolId);
                    }
                });
            });
            
                        // Add a refresh button at the bottom
            const refreshButton = document.createElement('button');
            refreshButton.className = 'btn btn-sm btn-ghost gap-2 mt-4 w-full';
            refreshButton.innerHTML = `<i class="fas fa-sync-alt"></i> Refresh Quotes`;
            refreshButton.addEventListener('click', loadWatchlist);
            watchlistItems.appendChild(refreshButton);
        })
        .catch(error => {
            console.error('Error loading watchlist:', error);
            watchlistItems.innerHTML = `
                <div class="alert alert-error shadow-lg">
                    <i class="fas fa-exclamation-circle"></i>
                    <span>Error loading watchlist data</span>
                    <button class="btn btn-sm btn-ghost" onclick="loadWatchlist()">Retry</button>
                </div>
            `;
        });
}

// Sync visible logical range between charts
function syncVisibleLogicalRange(chart1, chart2) {
    chart1.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {
        if (timeRange && timeRange.from !== null && timeRange.to !== null) {
            chart2.timeScale().setVisibleLogicalRange(timeRange);
        }
    });

    chart2.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {
        if (timeRange && timeRange.from !== null && timeRange.to !== null) {
            chart1.timeScale().setVisibleLogicalRange(timeRange);
        }
    });
}


syncVisibleLogicalRange(chart, rsiChart);
syncVisibleLogicalRange(chart, macdChart);
syncVisibleLogicalRange(chart, adxChart);
syncVisibleLogicalRange(chart, stochChart);

// Sync crosshair position between charts
function getCrosshairDataPoint(series, param) {
    if (!param.time) {
        return null;
    }
    const dataPoint = param.seriesData.get(series);
    return dataPoint || null;
}

function syncCrosshair(chart, series, dataPoint) {
    if (dataPoint) {
        chart.setCrosshairPosition(dataPoint.value, dataPoint.time, series);
        return;
    }
    chart.clearCrosshairPosition();
}

chart.subscribeCrosshairMove(param => {
    const dataPoint = getCrosshairDataPoint(candlestickSeries, param);
    syncCrosshair(rsiChart, rsiLine, dataPoint);
});

rsiChart.subscribeCrosshairMove(param => {
    const dataPoint = getCrosshairDataPoint(rsiLine, param);
    syncCrosshair(chart, candlestickSeries, dataPoint);
});

// Add a new symbol to the watchlist
function addSymbol() {
    const symbolInput = document.getElementById('newSymbol');
    const symbolError = document.getElementById('symbolError');
    const symbol = symbolInput.value.trim().toUpperCase();
    
    // Clear previous error
    symbolError.classList.add('hidden');
    symbolError.textContent = '';
    
    if (!symbol) {
        symbolError.textContent = 'Please enter a symbol';
        symbolError.classList.remove('hidden');
        return;
    }
    
    // Show loading state
    const addBtn = document.getElementById('addSymbolBtn');
    const originalContent = addBtn.innerHTML;
    addBtn.innerHTML = '<span class="loading loading-spinner loading-xs"></span>';
    addBtn.disabled = true;
    
    // Send request to add symbol
    fetch('/api/symbols', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol: symbol }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            symbolError.textContent = data.error;
            symbolError.classList.remove('hidden');
        } else {
            // Clear input
            symbolInput.value = '';
            
            // Add new symbol to the watchlist without full refresh
            // Only fetch the individual symbol data
            refreshSymbolQuote(data.symbol.ticker);
        }
    })
    .catch(error => {
        console.error('Error adding symbol:', error);
        symbolError.textContent = 'Error adding symbol. Please try again.';
        symbolError.classList.remove('hidden');
    })
    .finally(() => {
        // Restore button
        addBtn.innerHTML = originalContent;
        addBtn.disabled = false;
    });
}

// Fetch individual symbol quote
function refreshSymbolQuote(symbol) {
    // This is just a partial refresh for a single symbol
    // For now, just reload the full watchlist since we need to implement
    // a new API endpoint for getting a single symbol's data
    loadWatchlist();
}

// Remove a symbol from the watchlist
function removeSymbol(symbolId) {
    // Find and remove the element from the DOM directly for immediate feedback
    const symbolElement = document.querySelector(`.delete-symbol[data-id="${symbolId}"]`).closest('.card');
    if (symbolElement) {
        symbolElement.classList.add('animate-fade-out');
        setTimeout(() => {
            symbolElement.style.height = symbolElement.offsetHeight + 'px';
            setTimeout(() => {
                symbolElement.style.height = '0';
                symbolElement.style.opacity = '0';
                symbolElement.style.margin = '0';
                symbolElement.style.padding = '0';
                symbolElement.style.overflow = 'hidden';
                setTimeout(() => symbolElement.remove(), 300);
            }, 10);
        }, 100);
    }
    
    // Also remove from database
    fetch(`/api/symbols/${symbolId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            console.error('Error removing symbol:', response.statusText);
            // If failed, reload the watchlist to restore the removed item
            loadWatchlist(); 
        }
    })
    .catch(error => {
        console.error('Error removing symbol:', error);
        // If failed, reload the watchlist to restore the removed item
        loadWatchlist();
    });
}
