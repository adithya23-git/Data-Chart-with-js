document.addEventListener('DOMContentLoaded', () => {
    // Initialize Doughnut Chart
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    const doughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data:{
            labesl:['Apples' , 'Oranges', 'Bananas', 'Grapes', 'Pineapples'],
            datasets: [{
                label: 'Fruit Sales',
                data: [20, 30 , 25, 15 , 10],
                backgroundColor: [
                    'rgba(74, 144, 226, 0.8)',
                    'rgba(80, 227, 194, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderColor: [
                    'rgba(74, 144, 226, 0.8)',
                    'rgba(80, 227, 194, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
            
            }]
        },
        options: {
            title: {
              display: true,
              text: "World Wide Wine Production 2018"
            }
          }
        
    });


    // Initialize Line Chart
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
        type: 'line', 
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
            datasets: [{
                label: 'Sales Over Time', 
                data: [120, 190, 300, 500, 200, 300],
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderColor: 'hsl(0, 99.00%, 59.00%)',
                borderWidth: 2, 
                tension: 0.4
            }]
        },
        options: {
            responsive: true, 
            animation: {
                duration: 1000, 
                easing: 'easeInOutQuart' 
            },
            plugins: {
                legend: {
                    display: true, 
                    position: 'bottom' 
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false 
                    }
                },
                y: {
                    grid: {
                        color: '#eaeaea' 
                    },
                    beginAtZero: true 
                }
            }
        }
    });

    // Initialize Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar', 
        data: {
            labels: ['Poco', 'Oneplus', 'Samsung', 'Apple', 'Realme'], 
            datasets: [{
                label: 'Browser Usage', 
                data: [65, 59, 80, 81, 56], 
                backgroundColor: [ 
                    'rgba(74, 144, 226, 0.8)',
                    'rgba(80, 227, 194, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderColor: [ 
                    'rgb(6, 6, 6)',
                ],
                borderWidth: 2 
            }]
        },
        options: {
            responsive: true, 
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart' 
            },
            plugins: {
                legend: {
                    display: false 
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false 
                    }
                },
                y: {
                    grid: {
                        color: '#eaeaea'
                    },
                    beginAtZero: true 
                }
            }
        }
    });
});