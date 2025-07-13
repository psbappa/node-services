export default {
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
};
