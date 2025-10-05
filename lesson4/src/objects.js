const obj = {
    id: 1,
    name: 'Example Object',

    data: {
        values: [1, 2, 3, 4],
        flags: [true, false, true],
        details: {
            createdBy: 'System',
            createdAt: new Date().toLocaleString()
        }
    },

    info: [
        { key: 'b', value: 2 },
        { key: 'c', value: 3 }
    ],

    settings: {
        theme: 'dark',
        toggleTheme() {
            if (this.theme === 'dark') {
                this.theme = 'light';
            } else {
                this.theme = 'dark';
            }
            console.log('Theme changed to:', this.theme);
        }
    },

    showValues() {
        console.log('ID:', this.id);
        console.log('Name:', this.name);
        console.log('Values:', this.data.values);
        console.log('Flags:', this.data.flags);
        console.log('Created by:', this.data.details.createdBy);
        console.log('Created at:', this.data.details.createdAt);
        console.log('Info:', this.info);
    },

    sumValues() {
        const sum = this.data.values.reduce((acc, num) => acc + num, 0);
        console.log('Sum of values:', sum);
        return sum;
    },

    addInfo(key, value) {
        this.info.push({ key, value });
        console.log(`Added info: { key: '${key}', value: ${value} }`);
        this.updateTimestamp();
    },

    updateTimestamp() {
        this.data.details.createdAt = new Date().toLocaleString();
        console.log('Timestamp updated:', this.data.details.createdAt);
    }
};

obj.showValues();
obj.sumValues();
obj.addInfo('d', 4);
obj.settings.toggleTheme();
