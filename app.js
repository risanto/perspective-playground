Vue.createApp({
  data() {
    return {
      box: {
        perspective: 100,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
      },
    };
  },
  computed: {
    box_styles() {
      return {
        transform: `
        perspective(${this.box.perspective}px) 
        rotateX(${this.box.rotateX}deg) 
        rotateY(${this.box.rotateY}deg) 
        rotateZ(${this.box.rotateZ}deg)
        `,
      };
    },
  },
  methods: {
    reset() {
      for (const key in this.box) {
        let newVal = 0;

        if (key === "perspective") {
          newVal = 100;
        }
        this.box[key] = newVal;
      }
    },
    async copy() {
      const text = `transform:
        perspective(${this.box.perspective}px) 
        rotateX(${this.box.rotateX}deg) 
        rotateY(${this.box.rotateY}deg) 
        rotateZ(${this.box.rotateZ}deg)
        `;

      await navigator.clipboard.writeText(text);

      alert("CSS style is copied to the clipboard");
    },
  },
}).mount("#app");
