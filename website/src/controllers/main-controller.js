const productsService = require("../services/products-service");
const categoriesService = require("../services/category-service");
const brandService = require("../services/brand-service");

module.exports = {
  index: async (req, res) => {
    const category = await categoriesService.getAllCategories;
    const brand = await brandService.getAllBrands;
    res.render("index"), { category, brand };
  },
  contact: (req, res) => {
    res.render("contact");
  },
  contactMsg: (req, res) => {
    res.render("contact-msg");
  },
  
  howBuy: (req, res) => {
    res.render("buy");
  },
  questions: (req, res) => {
    res.render("questions");
  },
  changes: (req, res) => {
    res.render("changes");
  },

};
