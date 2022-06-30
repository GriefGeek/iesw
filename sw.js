importScripts(
    "https://cdn.jsdelivr.net/npm/comlink@4.3.1/dist/umd/comlink.min.js",
);

let service = {
    sort: () => {
        let a = [];

        for (let i = 50000; i >= 0; i--) {
            a.push(i);
        }

        function bubbleSort(a) {
            let swapped;
            do {
                swapped = false;
                for (let i = 0; i < a.length - 1; i++) {
                    if (a[i] > a[i + 1]) {
                        let temp = a[i];
                        a[i] = a[i + 1];
                        a[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }

        let start = new Date().getTime();
        bubbleSort(a);
        let end = new Date().getTime();
        let time = end - start;

        return time;
    },
};

Comlink.expose(service, self);
