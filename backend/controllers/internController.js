let data = require('../data/dummyData.json');
const fs = require('fs');
const path = require('path');

const showLoginPage = (req, res) => {
  res.render('login', { interns: data.interns });
};

const homepage = (req, res) => {
  res.render('home', { interns: data.interns });
};


const loginIntern = (req, res) => {
  const internId = parseInt(req.body.internId);
  res.redirect(`/dashboard/${internId}`);
};

const addIntern = (req, res) => {
  const { name } = req.body;
  const newIntern = {
    id: data.interns.length + 1,
    name,
    referralCode: `${name.toLowerCase()}2025`,
    donationsRaised: 0
  };

  data.interns.push(newIntern);
  data.leaderboard.push({ name: newIntern.name, donations: 0 });

  fs.writeFileSync(
    path.join(__dirname, '../data/dummyData.json'),
    JSON.stringify(data, null, 2)
  );

  res.redirect('/');
};

const showInternDashboard = (req, res) => {
  const internId = parseInt(req.params.id);
  const intern = data.interns.find(i => i.id === internId);
  if (!intern) return res.status(404).send('Intern not found');
  res.render('dashboard', { intern });
};

const getLeaderboard = (req, res) => {
  res.render('leaderboard', { leaderboard: data.leaderboard });
};



module.exports = {
  showLoginPage,
  loginIntern,
  homepage,
  addIntern,
  showInternDashboard,
  getLeaderboard
};
