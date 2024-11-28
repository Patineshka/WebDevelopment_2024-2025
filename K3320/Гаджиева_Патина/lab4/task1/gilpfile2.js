const gulp = require('gulp');

function task1(done) {
    console.log('Task 1 выполнен!');
    done();
}

function task2(done) {
    console.log('Task 2 выполнен!');
    done();
}

// Последовательное выполнение задач
const sequenceTasks = gulp.series(task1, task2);

// Параллельное выполнение задач
const parallelTasks = gulp.parallel(task1, task2);

exports.sequence = sequenceTasks;
exports.parallel = parallelTasks;
