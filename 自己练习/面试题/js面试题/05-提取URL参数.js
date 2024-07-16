// 提取URL参数
// 定义一个包含查询字符串的 URL
let url = 'https://alibaba.com?a=1&b=2&c=3#hash'
// 定义一个函数，用于提取 URL 中的查询参数
function queryURLParams(URL) {
    // 使用 split 方法，以? 为分隔符，将 URL 分割成数组，取出数组的第二个元素，即查询字符串
    let url = URL.split('?')[1]
    // 打印出分割后的数组
    // console.log(URL.split('?'))
    // 创建 URLSearchParams 的实例，用来解析查询字符串
    const urlSearchParams = new URLSearchParams(url)
    // 使用 Object.fromEntries 方法将 URLSearchParams 对象转换为一个包含查询参数的对象
    const params = Object.fromEntries(urlSearchParams)

    // 返回提取的参数对象
    return params
}
// 调用函数并将结果打印到控制台
console.log(queryURLParams(url))



// ### Why 🤔
// 在网页开发中，经常需要从URL中提取查询参数。这些参数通常用于传递信息，比如搜索条件、用户偏好等。理解如何提取这些参数对于处理用户输入和动态生成内容非常重要。

// ### What 📚
// 这段代码定义了一个函数 `queryURLParams`，它的作用是从给定的URL中提取查询参数，并以对象的形式返回这些参数。

// ### How 🛠️
// 让我们逐步分析这个函数的工作原理：

// 1. **定义 URL**：首先，我们有一个包含查询字符串的URL，例如 `'https://alibaba.com?a=1&b=2&c=3#hash'`。

// 2. **分割 URL**：使用 `split('?')` 方法将URL分割成两部分，第一部分是基础URL，第二部分是查询字符串。这里我们只关心第二部分。

// 3. **创建 URLSearchParams 对象**：使用 `new URLSearchParams(url)` 创建一个 `URLSearchParams` 对象，这个对象专门用来解析查询字符串。

// 4. **使用 Object.fromEntries 转换**：`Object.fromEntries(urlSearchParams)` 将 `URLSearchParams` 对象转换成一个普通对象，其中包含所有查询参数作为键值对。

// 5. **返回参数对象**：函数返回这个包含查询参数的对象。

// ### Example 🌰
// 以提供的URL为例，`queryURLParams(url)` 函数会执行以下步骤：

// - 分割URL得到 `'a=1&b=2&c=3'`。
// - 创建 `URLSearchParams` 对象，解析得到 `{ 'a': '1', 'b': '2', 'c': '3' }`。
// - 使用 `Object.fromEntries` 将 `URLSearchParams` 对象转换为 `{ a: '1', b: '2', c: '3' }`。

// ### How Good 🌟
// 使用 `queryURLParams` 函数的好处是它提供了一种简洁且有效的方式来提取和使用URL中的查询参数。这对于需要根据用户输入动态显示内容的Web应用非常有用。

// 如果你需要调整难度等级，请告诉我。如果内容太复杂，输入'-'返回更简单的笔记；如果内容太简单，输入'+'返回更详细的笔记。
