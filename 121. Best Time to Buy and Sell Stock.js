/**
 * @param {number[]} prices
 * @return {number}
 */

// prices = [7,1,5,3,6,4]
// profit = 5

function maxProfit(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    
    for(let i = 0; i < prices.length - 1; i++) {
        let tmpProfit = prices[i + 1] - prices[i];
        if(tmpProfit > 0) {
            if(prices[i] < buyPrice) {
                buyPrice = prices[i];
            }
            if(prices[i + 1] - buyPrice > profit) {
                profit = prices[i + 1] - buyPrice;
            }
        }         
    }
    
    return profit;
};
