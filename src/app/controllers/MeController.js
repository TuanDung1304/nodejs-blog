const Course = require('../models/Course');

class MeController {
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render('me/stored-courses', { courses });
      })
      .catch(next);
  }
}

module.exports = new MeController();
