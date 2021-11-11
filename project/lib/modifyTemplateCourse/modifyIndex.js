function modifyIndex(path) {
    return new Promise((resolve, reject) => {
        const titleCourse = document.getElementById('title-course');
        titleCourse.innerHTML("Test...");

        resolve(path);
    })
}

export {
    modifyIndex
}