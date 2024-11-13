 // Keep track of the current page number
 let currentPage = 1; 

 // Define the total number of pages
 const totalPages = 5; 
 const pageNumbersContainer = document.getElementById('pageNumbers');

 // Function to initialize content loading
 document.addEventListener("DOMContentLoaded", () => {
     // Set currentPage based on the page being viewed
     const pageName = window.location.pathname.split('/').pop();
     currentPage = determineCurrentPage(pageName);
     
     // Set up event listeners for the buttons
     document.getElementById("prevBtn").addEventListener("click", () => changePage(-1));
     document.getElementById("nextBtn").addEventListener("click", () => changePage(1));
     
     // Render page numbers and update button states
     renderPageNumbers();
     updateButtonStates();
 });

 // Function to determine current page from file name
 function determineCurrentPage(pageName) {
     switch (pageName) {
         case 'eiffeltower.html':
             return 1;
         case 'taj.html':
             return 2;
         case 'lao.html':
             return 3;
         case 'thepryde.html':
             return 4;
         case 'tonkwen.html':
             return 5;
         default:
             return 1; // Default to the first page
     }
 }

 // Function to handle page navigation
 function changePage(direction) {
     currentPage += direction; // Increment or decrement the current page
     
     // Ensure currentPage stays within the defined limits
     if (currentPage < 1) currentPage = totalPages; // Wrap to last page
     if (currentPage > totalPages) currentPage = 1; // Wrap to first page
     
     // Redirect based on page number
     switch (currentPage) {
         case 1:
             window.location.href = 'eiffeltower.html';
             break;
         case 2:
             window.location.href = 'taj.html';
             break;
         case 3:
             window.location.href = 'lao.html';
             break;
         case 4:
             window.location.href = 'thepryde.html';
             break;
         case 5:
             window.location.href = 'tonkwen.html';
             break;
     }
     
     // Update button states after navigation
     updateButtonStates();
 }

 // Function to render page numbers
 function renderPageNumbers() {
     pageNumbersContainer.innerHTML = ''; // Clear existing page numbers
     for (let i = 1; i <= totalPages; i++) {
         const pageNumber = document.createElement('button'); // Create a button for each page number
         pageNumber.textContent = i; // Set button text to the page number
         pageNumber.classList.add('page-number'); // Add a class for styling
         pageNumber.onclick = () => {
             currentPage = i; // Update current page
             changePage(0); // Navigate to the selected page
         };
         pageNumbersContainer.appendChild(pageNumber); // Append the button to the container
     }
     updateActivePage(); // Update active page highlighting
 }

 // Function to update the active page button
 function updateActivePage() {
     const buttons = pageNumbersContainer.getElementsByClassName('page-number');
     for (let button of buttons) {
         button .classList.remove('active'); // Remove active class from all buttons
     }
     buttons[currentPage - 1].classList.add('active'); // Highlight the current page button
 }

 // Function to update button states based on current page
 function updateButtonStates() {
     document.getElementById("prevBtn").disabled = (currentPage === 1);
     document.getElementById("nextBtn").disabled = (currentPage === totalPages);
 }

