module.exports = {
  index: (req, res) => {
    res.render("index");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  contactMsg: (req, res) => {
    res.render("contact-msg")
  }
};
