var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Circulating Supply', 'Charity Distributions And Marketing Wallet', 'Auto-Mining Distribution', 'DEX Liquidity'],
        datasets: [{
            label: 'Supply Breakdown',
            data: [38, 7, 5, 50],
            backgroundColor: [
                'rgba(24, 119, 242, 1)',
                'rgba(66, 183, 42, 1)',
                'rgba(31, 24, 242, 1)',
                'rgba(181, 213, 255, 1)'
            ],
            
            borderColor: [
                'rgba(24, 119, 242, 1)',
                'rgba(66, 183, 42, 1)',
                'rgba(31, 24, 242, 1)',
                'rgba(181, 213, 255, 1)'
            ],
            borderWidth: 0.5,
            options: {
                layout: {
                    padding: 20
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
});