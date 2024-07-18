// 发布订阅

// 声明一个名为 EventEmitter 的类，用于实现发布-订阅模式
class EventEmitter{

    // 初始化一个空对象 handlers，用于存储事件类型和对应的处理函数数组
    handlers = {}
    
    /**
     * 注册一个事件处理函数
     * @param {string} type - 事件类型
     * @param {function} handler - 事件处理函数
     * @param {boolean} once - 是否只执行一次
     */
    // type：事件的类型，比如 "click" 或 "load"。
    // handler：当事件触发时应该调用的函数。
    // once：一个可选参数，如果设置为 true，则表示这个处理函数只应该被调用一次。
    on(type, handler, once = false) {
        // 如果对象中没有 type 类型的事件处理函数数组，创建一个新的数组
        if (!this.handlers[type]) {
            this.handlers[type] = []
        }

        // 如果数组中不包含当前 handler，将其添加到数组中，并记录是否只执行一次
        if (!this.handlers[type].includes(handler)) {
            this.handlers[type].push(handler)
            handler.once = once
        }
    }

       /**
     * 注册一个事件处理函数，该函数只会被执行一次
     * @param {string} type - 事件类型
     * @param {function} handler - 事件处理函数
     */
    once(type, handler) {
		this.on(type, handler, true);
    }
    /**
     * 从指定的事件类型中移除一个事件处理函数
     * @param {string} type - 要移除处理函数的事件类型
     * @param {function} handler - 要移除的事件处理函数
     */
    off(type,handler) {
        if (this.handlers[type]) {
            this.handlers[type] = this.handlers[type].filter(h => {
                return h!== handler
            })
        }
    }

        /**
     * 触发指定事件类型的所有事件处理函数
     * 如果 handle.once 为真, 触发后删除
     * @param {string} type - 要触发的事件类型
     */
    trigger(type) {
        if (this.handlers[type]) {
            this.handlers[type].forEach(handler => {
                handler.call(this)
                if (handler.once) {
                    this.off(type,handler)
                }
            })
        }
    }
}


const ev = new EventEmitter()

function handler1() {
    console.log('handler1');
}

function handler2() {
    console.log('handler2');
}
function handler3() {
    console.log('handler3');
}

ev.on('test',handler1)
ev.once('test',handler2)
ev.on('test',handler3)

ev.trigger('test')
ev.trigger('test')