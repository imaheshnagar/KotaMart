exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.buyerBoard = (req, res) => {
  res.status(200).send("Buyer Content.");
};


exports.sellerBoard = (req, res) => {
  res.status(200).send("seller Content.");
};