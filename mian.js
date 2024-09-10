"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary libraries
var d3 = require("d3");
// Define the dashboard component
var Dashboard = /** @class */ (function () {
    function Dashboard(data) {
        var _this = this;
        this.data = data;
        this.overviewCard = document.getElementById('overview-card');
        this.salesCard = document.getElementById('sales-card');
        this.inventoryCard = document.getElementById('inventory-card');
        this.customersCard = document.getElementById('customers-card');
        this.marketingCard = document.getElementById('marketing-card');
        this.operationsCard = document.getElementById('operations-card');
        // Add event listeners to the cards
        this.overviewCard.addEventListener('click', function () { return _this.showOverview(); });
        this.salesCard.addEventListener('click', function () { return _this.showSales(); });
        this.inventoryCard.addEventListener('click', function () { return _this.showInventory(); });
        this.customersCard.addEventListener('click', function () { return _this.showCustomers(); });
        this.marketingCard.addEventListener('click', function () { return _this.showMarketing(); });
        this.operationsCard.addEventListener('click', function () { return _this.showOperations(); });
    }
    // Show the overview data
    Dashboard.prototype.showOverview = function () {
        var overview = this.data.overview;
        d3.select('#overview-card')
            .html("\n        <h2>Overview</h2>\n        <p>Total Sales: ".concat(overview.totalSales, "</p>\n        <p>Total Revenue: ").concat(overview.totalRevenue, "</p>\n        <p>Number of Customers: ").concat(overview.numCustomers, "</p>\n        <p>Top Selling Product: ").concat(overview.topSellingProduct, "</p>\n      "));
    };
    // Show the sales data
    Dashboard.prototype.showSales = function () {
        var sales = this.data.sales;
        d3.select('#sales-card')
            .html("\n        <h2>Sales</h2>\n        <p>Daily Sales: ".concat(sales.dailySales, "</p>\n        <p>Monthly Sales: ").concat(sales.monthlySales, "</p>\n        <p>Sales by Category:</p>\n        <ul>\n          ").concat(Object.keys(sales.salesByCategory).map(function (category) { return "\n            <li>".concat(category, ": ").concat(sales.salesByCategory[category], "</li>\n          "); }).join(''), "\n        </ul>\n      "));
    };
    // Show the inventory data
    Dashboard.prototype.showInventory = function () {
        var inventory = this.data.inventory;
        d3.select('#inventory-card')
            .html("\n        <h2>Inventory</h2>\n        <p>Current Stock Levels:</p>\n        <ul>\n          ".concat(Object.keys(inventory.currentStockLevels).map(function (product) { return "\n            <li>".concat(product, ": ").concat(inventory.currentStockLevels[product], "</li>\n          "); }).join(''), "\n        </ul>\n        <p>Low Stock Alerts:</p>\n        <ul>\n          ").concat(Object.keys(inventory.lowStockAlerts).map(function (product) { return "\n            <li>".concat(product, ": ").concat(inventory.lowStockAlerts[product], "</li>\n          "); }).join(''), "\n        </ul>\n      "));
    };
    // Show the customers data
    Dashboard.prototype.showCustomers = function () {
        var customers = this.data.customers;
        d3.select('#customers-card')
            .html("\n        <h2>Customers</h2>\n        <p>Customer Demographics:</p>\n        <ul>\n          <li>Age: ".concat(customers.customerDemographics.age, "</li>\n          <li>Location: ").concat(customers.customerDemographics.location, "</li>\n        </ul>\n        <p>Customer Purchase History:</p>\n        <ul>\n          ").concat(Object.keys(customers.customerPurchaseHistory).map(function (customer) { return "\n            <li>".concat(customer, ": ").concat(customers.customerPurchaseHistory[customer], "</li>\n          "); }).join(''), "\n        </ul>\n      "));
    };
    // Show the marketing data
    Dashboard.prototype.showMarketing = function () {
        var marketing = this.data.marketing;
        d3.select('#marketing-card')
            .html("\n        <h2>Marketing</h2>\n        <p>Social Media Engagement:</p>\n        <ul>\n          <li>Facebook: ".concat(marketing.socialMediaEngagement.facebook, "</li>\n          <li>Twitter: ").concat(marketing.socialMediaEngagement.twitter, "</li>\n        </ul>\n        <p>Email Marketing Campaigns:</p>\n        <ul>\n          ").concat(Object.keys(marketing.emailMarketingCampaigns).map(function (campaign) { return "\n            <li>".concat(campaign, ": ").concat(marketing.emailMarketingCampaigns[campaign], "</li>\n          "); }).join(''), "\n        </ul>\n      "));
    };
    return Dashboard;
}());
