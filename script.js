document.addEventListener("DOMContentLoaded", () => {
  const bundleOptions = document.querySelectorAll(".bundle-option");

  bundleOptions.forEach(option => {
    option.addEventListener("click", () => {
    
      bundleOptions.forEach(opt => opt.classList.remove("selected"));
     
      option.classList.add("selected");

  
      const input = option.querySelector('input[type="radio"]');
      if (input) input.checked = true;
    });
  });
});
