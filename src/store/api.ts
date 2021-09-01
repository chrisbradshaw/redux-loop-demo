export const request = (): Promise<object[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const items = [];
        for (let i = 0; i < 5; i++) {
          const d = new Date();
          items.push({
            id: Math.random(),
            datetime: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
          });
        }
        resolve(items);
      }, 1500);
    });
  };

  export const createSubscription = () => {
    let interval: number;
    return {
      subscribe: (callback: (data: object) => void) => {
        interval = window.setInterval(() => {
          const d = new Date();
          callback({
            data: [
              {
                id: Math.random(),
                datetime: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
              }
            ]
          });
        }, 1000);
      },
      unsubscribe: () => {
        clearInterval(interval);
      }
    };
  };
