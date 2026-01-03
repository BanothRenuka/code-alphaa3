function highlightFlow() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => box.classList.remove("highlight"));

    let index = 0;

    const interval = setInterval(() => {
        if (index < boxes.length) {
            boxes[index].classList.add("highlight");
            index++;
        } else {
            clearInterval(interval);
        }
    }, 600);
}
