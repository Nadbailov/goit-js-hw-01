function getElementWidth(content, padding, border) {

    // 1. Перетворюємо рядок в число з плаваючою крапкою
    
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

// 2. Розрахунок: content + (padding + border) * 2

    return contentWidth + (paddingWidth + borderWidth) * 2;

}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
