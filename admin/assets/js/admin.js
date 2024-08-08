/* -------------------------------------
    doughnut chart
--------------------------------------*/
const color = '#80C142'; //차트 색상
const colorBg = '#eee'; //차트 색상

//24콜 사용률
const percent1 = 84;
const doughnut_cont = document.getElementById('doughnut_cont');
const divElement = document.createElement('div');
const domString = '<div class="doughnut_value"><p>' + percent1 + '%</p></div>';
divElement.innerHTML = domString;
doughnut_cont.appendChild(divElement.firstChild);

new Chart(document.getElementById('doughnut_chart'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent1, 100 - percent1],
                backgroundColor: [color, colorBg],
                borderWidth: 0,
                // borderRadius: 30,
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 24CALL 동시 사용률
const percent2 = 22;
const doughnut_cont2 = document.getElementById('doughnut_cont2');
const divElement2 = document.createElement('div');
const domString2 = '<div class="doughnut_value"><p>' + percent2 + '%</p></div>';
divElement2.innerHTML = domString2;
doughnut_cont2.appendChild(divElement2.firstChild);

new Chart(document.getElementById('doughnut_chart-2'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent2, 100 - percent2],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 서버 사용률 -1 
const percent3 = 70;
const doughnut_cont3 = document.getElementById('doughnut_cont3');
const divElement3 = document.createElement('div');
const domString3 = '<div class="doughnut_value"><p>' + percent3 + '%</p></div>';
divElement3.innerHTML = domString3;
doughnut_cont3.appendChild(divElement3.firstChild);

new Chart(document.getElementById('doughnut_chart-3'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent3, 100 - percent3],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 서버 사용률 -2
const percent4 = 50;
const doughnut_cont4 = document.getElementById('doughnut_cont4');
const divElement4 = document.createElement('div');
const domString4 = '<div class="doughnut_value"><p>' + percent4 + '%</p></div>';
divElement4.innerHTML = domString4;
doughnut_cont4.appendChild(divElement4.firstChild);

new Chart(document.getElementById('doughnut_chart-4'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent4, 100 - percent4],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 24 CALL 동시 사용률 -1
const percent5 = 68;
const doughnut_cont5 = document.getElementById('doughnut_cont5');
const divElement5 = document.createElement('div');
const domString5 = '<div class="doughnut_value"><p>' + percent5 + '%</p></div>';
divElement5.innerHTML = domString5;
doughnut_cont5.appendChild(divElement5.firstChild);

new Chart(document.getElementById('doughnut_chart-5'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent5, 100 - percent5],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 24 CALL 동시 사용률 -2
const percent6 = 24;
const doughnut_cont6 = document.getElementById('doughnut_cont6');
const divElement6 = document.createElement('div');
const domString6 = '<div class="doughnut_value"><p>' + percent6 + '%</p></div>';
divElement6.innerHTML = domString6;
doughnut_cont6.appendChild(divElement6.firstChild);

new Chart(document.getElementById('doughnut_chart-6'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent6, 100 - percent6],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 24 CALL 동시 사용률 -3
const percent7 = 50;
const doughnut_cont7 = document.getElementById('doughnut_cont7');
const divElement7 = document.createElement('div');
const domString7 = '<div class="doughnut_value"><p>' + percent7 + '%</p></div>';
divElement7.innerHTML = domString7;
doughnut_cont7.appendChild(divElement7.firstChild);

new Chart(document.getElementById('doughnut_chart-7'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent7, 100 - percent7],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 상담완료 -1 
const percent8 = 22;
const doughnut_cont8 = document.getElementById('doughnut_cont8');
const divElement8 = document.createElement('div');
const domString8 = '<div class="doughnut_value"><p>' + percent8 + '%</p></div>';
divElement8.innerHTML = domString8;
doughnut_cont8.appendChild(divElement8.firstChild);

new Chart(document.getElementById('doughnut_chart-8'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent8, 100 - percent8],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 상담완료 -2
const percent9 = 90;
const doughnut_cont9 = document.getElementById('doughnut_cont9');
const divElement9 = document.createElement('div');
const domString9 = '<div class="doughnut_value"><p>' + percent9 + '%</p></div>';
divElement9.innerHTML = domString9;
doughnut_cont9.appendChild(divElement9.firstChild);

new Chart(document.getElementById('doughnut_chart-9'), {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [percent9, 100 - percent9],
                backgroundColor: [color, colorBg],
                borderWidth: 0
            }
        ]
    },
    options: {
        cutout:50,
        plugins: {
            tooltip: {
              enabled: false
            }
        }
    }
});

// 상담완료 유형 현황
new Chart(document.getElementById('doughnut_chart-10'), {
    type: 'doughnut',
    data: {
        labels: ['간편상담','보장분석','가입제안','체결예정'],
        datasets: [
            {
                data: [20, 10, 10, 60],
                backgroundColor: ['#1464D3','#6051EA','#F1AE29','#80C142'],
                borderWidth: 0,
                borderRadius:0,
            }
        ]
    },
    options: {
        layout: {
            padding: {
                top:50
            }
        },
        plugins: {
            legend: {
                display: true,
                position:'bottom',
                rtl:true,
                labels: {
                    boxWidth: 14,
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                },
                title: {
                    display:true,
                    padding:5
                }
            },
        }

    }
});

/* -------------------------------------
    line chart
--------------------------------------*/
// 시간대별 상담완료/미완료 
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: ['', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [null, 10, 18, 14, 22, 8, 30, 11, 37, 25, 6],
            borderColor: "#0DC5AF",
            fill: false
        }, {
            data: [null, 22, 11, 5, 48, 38, 22, 26, 20, 31, 14],
            borderColor: "#7EC646",
            fill: false
        }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

// 24 CALL 동시 사용률
new Chart(document.getElementById("line-chart2"), {
    type: 'line',
    data: {
        labels: ['', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [null, 10, 18, 14, 22, 8, 30, 11, 37, 25, 6],
            borderColor: "#0DC5AF",
            fill: false
        }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y: {
                beginAtZero: true,
            }
        }
    }
});

// 서버 사용률
new Chart(document.getElementById("line-chart3"), {
    type: 'line',
    data: {
        labels: ['', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [null, 22, 11, 5, 30, 34, 22, 26, 20, 31, 14],
            borderColor: "#0DC5AF",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y: {
                ticks: {
                    stepSize:5,
                },
                beginAtZero: true
            }
        }
    }
});

// 24 CALL 동시 사용률-1
new Chart(document.getElementById("line-chart4"), {
    type: 'line',
    data: {
        labels: ['', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [null, 22, 11, 5, 48, 38, 22, 26, 20, 31, 14],
            borderColor: "#0DC5AF",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y: {
                ticks: {
                    stepSize:10,
                },
                beginAtZero: true
            }
        }
    }
});

// 24 CALL 동시 사용률-2
new Chart(document.getElementById("line-chart5"), {
    type: 'line',
    data: {
        labels: ['', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [null, 22, 11, 5, 48, 38, 22, 26, 20, 31, 14],
            borderColor: "#0DC5AF",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y: {
                ticks: {
                    stepSize:10,
                },
                beginAtZero: true
            }
        }
    }
});

// 상담완료 -1
new Chart(document.getElementById("line-chart6"), {
    type: 'line',
    data: {
        labels: ['', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [null, 22, 11, 5, 48, 38, 22, 26, 20, 31, 14],
            borderColor: "#0DC5AF",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y: {
                ticks: {
                    stepSize:10,
                },
                beginAtZero: true
            }
        }
    }
});

// 상담완료 -2
new Chart(document.getElementById("line-chart7"), {
    type: 'line',
    data: {
        labels: ['', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [null, 22, 11, 5, 48, 38, 22, 26, 20, 31, 14],
            borderColor: "#0DC5AF",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y: {
                ticks: {
                    stepSize:10,
                },
                beginAtZero: true
            }
        }
    }
});

/* -------------------------------------
    bar chart
--------------------------------------*/
// 상담결과 현황
const barCtx = document.querySelector('#bar-chart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['보장분석', '가입제안', '계약체결', '간편상담', '원포인트코칭'],
        datasets: [{
            barThickness:17,
            maxBarThickness:17,
            borderWidth:0,
            data: [6, 14, 13, 13, 8],
            backgroundColor: ['#09A9EA', '#09A9EA', '#09A9EA', '#80C142', '#09A9EA'],
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        borderSkipped: false,
        borderRadius: [
            { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
        ],

        scales: {
            y: {
                display: true,
                ticks: {
                    stepSize:5,
                    beginAtZero: true,
                    max: 20
                }
            },
            x:{
                grid: {
                    display:false
                }
            },
        },
    }
})


// 상담결과 현황
const barCtx2 = document.querySelector('#bar-chart2').getContext('2d');
const barChart2 = new Chart(barCtx2, {
    type: 'bar',
    data: {
        labels: ['보장분석', '가입제안', '계약체결', '간편상담', '원포인트코칭'],
        datasets: [{
            barThickness:17,
            maxBarThickness:17,
            borderWidth:0,
            data: [11, 14, 13, 13, 8],
            backgroundColor: ['#B4DE7C', '#B4DE7C', '#B4DE7C', '#B4DE7C', '#B4DE7C'],
            hoverBackgroundColor: '#00854A'
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },
        borderSkipped: false,
        borderRadius: [
            { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
        ],

        scales: {
            y: {
                display: true,
                ticks: {
                    stepSize:5,
                    beginAtZero: true,
                    max: 20
                }
            },
            x:{
                grid: {
                    display:false
                }
            },
        },
    }
})


/* -------------------------------------
    horizontal chart
--------------------------------------*/
// PA별 상담현황
new Chart(document.getElementById('horizon-chart'), {
    type: 'bar',
    data: {
        labels: [
            'ooo 업무 이제윤',
            'ooo 업무 이제윤',
            'ooo 업무 이제윤',
            'ooo 업무 이제윤',
            'ooo 업무 이제윤',
            'ooo 업무 이제윤',
            'ooo 업무 이제윤',
            'ooo 업무 이제윤',
        ],
        datasets: [{
            barThickness:15,
            maxBarThickness:15,
            borderWidth:0,
            data: [80, 20, 30, 40, 10, 40, 20, 30,],
            backgroundColor: ['#80C142', '#09A9EA', '#09A9EA', '#09A9EA', '#09A9EA', '#09A9EA', '#09A9EA', '#09A9EA']
        }],
    },
    options: {
        indexAxis: 'y',
        plugins : {
            legend: {
                display: false
            },
        },
        borderSkipped: false,
        borderRadius: [
            { topLeft: 0, topRight: 4, bottomLeft: 0, bottomRight: 4 },
        ],
        scales: {
            x:{
                grid: {
                    display:false
                }
            },
            y:{
                grid: {
                    display:false
                }
            }
        }
    }
})
























