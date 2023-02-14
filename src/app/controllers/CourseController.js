const Course = require('../models/Course');

class CourseController {
  //GET /courses/:slug
  async show(req, res, next) {
    await Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: course.toObject() });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create');
  }

  store(req, res, next) {
    // res.json(req.body);
    const data = req.body;
    const course = new Course({
      ...data,
      thumb: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
    });
    course.save().then(() => res.redirect(`/`));
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render('courses/edit', { course: course.toObject() });
      })
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
}

module.exports = new CourseController();
