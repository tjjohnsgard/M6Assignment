document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('empForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
    });
  });