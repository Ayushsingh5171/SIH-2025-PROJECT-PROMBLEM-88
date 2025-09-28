// =============================================
// GLOBAL VARIABLES AND CONFIGURATION
// =============================================
let studentActivities = [];
let verifiedCertificates = 0;
let currentUser = null;

// =============================================
// UTILITY FUNCTIONS
// =============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// =============================================
// INDEX.HTML FUNCTIONALITY
// Enhanced Home Page Functionality
function initializeEnhancedHomePage() {
    // Load enhanced home page features
    setupEnhancedHomeInteractions();
    loadEnhancedEventsData();
    loadEnhancedNoticesData();
    
    showNotification("Welcome to Smart Campus Portal!", "success");
}

function setupEnhancedHomeInteractions() {
    // Enhanced navigation interactions
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', () => performSearch(searchInput.value));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInput.value);
        });
    }

    // View all buttons
    const viewAllBtns = document.querySelectorAll('.view-all-btn');
    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Showing all items...', 'info');
        });
    });

    // Initialize chatbot
    initializeEnhancedChatbot();
}

function performSearch(query) {
    if (!query.trim()) {
        showNotification('Please enter a search term', 'error');
        return;
    }
    
    showNotification(`Searching for: "${query}"`, 'info');
    // In real implementation, this would perform actual search
}

function loadEnhancedEventsData() {
    const eventsBox = document.getElementById('eventsBox');
    if (eventsBox) {
        // Data would typically come from API
        // For now, we'll use the static HTML content
        console.log('Events data loaded');
    }
}

function loadEnhancedNoticesData() {
    const noticesBox = document.getElementById('noticesBox');
    if (noticesBox) {
        // Data would typically come from API
        console.log('Notices data loaded');
    }
}

function initializeEnhancedChatbot() {
    const chatInput = document.querySelector('.chat-input');
    const sendBtn = document.querySelector('.send-btn');
    
    if (chatInput && sendBtn) {
        sendBtn.addEventListener('click', sendChatMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendChatMessage();
        });
    }
}

function sendChatMessage() {
    const chatInput = document.querySelector('.chat-input');
    const chatContent = document.querySelector('.chat-content-enhanced');
    
    if (!chatInput.value.trim()) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message';
    userMessage.innerHTML = `
        <div class="message-content" style="margin-left: auto; text-align: right;">
            <p style="background: #667eea; color: white; margin-left: 40px;">${chatInput.value}</p>
            <span class="message-time">Just now</span>
        </div>
        <div class="message-avatar" style="background: #2c3e50;">
            <i class="fas fa-user"></i>
        </div>
    `;
    chatContent.appendChild(userMessage);
    
    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';
        botMessage.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>Thanks for your message! How can I assist you with campus services?</p>
                <span class="message-time">Just now</span>
            </div>
        `;
        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 1000);
    
    chatInput.value = '';
    chatContent.scrollTop = chatContent.scrollHeight;
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbotBox');
    if (chatbot) {
        chatbot.classList.toggle('active');
    }
}

// Update the main initialization to use enhanced version
// In your page detection switch, change:
// case 'index.html': initializeEnhancedHomePage(); break;

// =============================================
// LOGIN.HTML FUNCTIONALITY

// Enhanced Login Page Functionality
function initializeEnhancedLoginPage() {
    // Load enhanced login features
    setupEnhancedLoginInteractions();
    setupEnhancedFormDynamics();
    
    showNotification("Welcome to the login portal!", "info");
}

function setupEnhancedLoginInteractions() {
    // Enhanced navigation interactions
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Role preview click handlers
    const rolePreviews = document.querySelectorAll('.role-preview');
    rolePreviews.forEach((preview, index) => {
        preview.addEventListener('click', () => {
            const userTypes = ['student', 'faculty', 'visitor'];
            const userTypeSelect = document.getElementById('userType');
            userTypeSelect.value = userTypes[index];
            userTypeSelect.dispatchEvent(new Event('change'));
        });
    });
}

function setupEnhancedFormDynamics() {
    const userType = document.getElementById("userType");
    const domainSection = document.getElementById("domainSection");
    const domain = document.getElementById("domain");
    const subDomainSection = document.getElementById("subDomainSection");
    const subdomain = document.getElementById("subdomain");
    const loginForm = document.getElementById("loginForm");

    // Enhanced user type change handler
    if (userType) {
        userType.addEventListener("change", () => {
            if (userType.value === "faculty") {
                domainSection.classList.remove("hidden");
                subDomainSection.classList.add("hidden");
            } else {
                domainSection.classList.add("hidden");
                subDomainSection.classList.add("hidden");
            }
            
            // Add visual feedback
            userType.style.borderColor = userType.value ? '#28a745' : '#e9ecef';
        });
    }

    // Enhanced domain change handler
    if (domain) {
        domain.addEventListener("change", () => {
            subdomain.innerHTML = "<option value=''>-- Select Subdomain --</option>";
            
            if (domain.value) {
                subDomainSection.classList.remove("hidden");
                
                const subdomains = {
                    sports: [
                        {value: 'indoor', text: '🏓 Indoor Sports'},
                        {value: 'field', text: '⚽ Field Sports'},
                        {value: 'aquatic', text: '🏊 Aquatic Sports'}
                    ],
                    clubs: [
                        {value: 'drama', text: '🎭 Drama Club'},
                        {value: 'singing', text: '🎤 Singing Club'},
                        {value: 'ncc', text: '🇮🇳 NCC'},
                        {value: 'dance', text: '💃 Dance Club'},
                        {value: 'nss', text: '🤝 NSS'},
                        {value: 'debate', text: '💬 Debate Club'}
                    ],
                    technical: [
                        {value: 'workshop', text: '🔧 Workshop'},
                        {value: 'hackathon', text: '💻 Hackathon'},
                        {value: 'seminar', text: '🎤 Technical Seminar'},
                        {value: 'project', text: '🚀 Project Exhibition'}
                    ]
                };

                if (subdomains[domain.value]) {
                    subdomains[domain.value].forEach(item => {
                        subdomain.innerHTML += `<option value="${item.value}">${item.text}</option>`;
                    });
                }
                
                domain.style.borderColor = '#28a745';
            } else {
                subDomainSection.classList.add("hidden");
                domain.style.borderColor = '#e9ecef';
            }
        });
    }

    // Enhanced form submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const type = userType.value;

            // Enhanced validation with visual feedback
            let isValid = true;
            
            if (!type) {
                showNotification("Please select a user type.", "error");
                userType.style.borderColor = '#dc3545';
                isValid = false;
            } else {
                userType.style.borderColor = '#28a745';
            }

            if (!username) {
                showNotification("Please enter your username.", "error");
                document.getElementById("username").style.borderColor = '#dc3545';
                isValid = false;
            } else {
                document.getElementById("username").style.borderColor = '#28a745';
            }

            if (!password) {
                showNotification("Please enter your password.", "error");
                document.getElementById("password").style.borderColor = '#dc3545';
                isValid = false;
            } else {
                document.getElementById("password").style.borderColor = '#28a745';
            }

            if (!isValid) return;

            // Show loading state
            const loginBtn = document.querySelector('.login-btn');
            const originalText = loginBtn.innerHTML;
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
            loginBtn.disabled = true;

            // Simulate authentication
            setTimeout(() => {
                currentUser = {
                    type: type,
                    username: username,
                    domain: type === 'faculty' ? domain.value : null,
                    subdomain: type === 'faculty' ? subdomain.value : null
                };

                // Store user data in sessionStorage
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

                showNotification(`Welcome ${username}!`, "success");
                
                // Restore button
                loginBtn.innerHTML = originalText;
                loginBtn.disabled = false;

                const redirects = {
                    'student': 'student.html',
                    'faculty': 'faculty.html',
                    'visitor': 'visitor.html'
                };

                window.location.href = redirects[type] || 'index.html';
            }, 2000);
        });
    }
}

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector('.password-toggle i');
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.className = "fas fa-eye-slash";
    } else {
        passwordInput.type = "password";
        toggleIcon.className = "fas fa-eye";
    }
}

function showHelp() {
    showNotification("For login assistance, contact campus IT support at support@sih2025.edu", "info");
}

function showContact() {
    showNotification("Contact campus administration: admin@sih2025.edu | +91-9876543210", "info");
}

// Update the main initialization to use enhanced version
// In your page detection switch, change:
// case 'login.html': initializeEnhancedLoginPage(); break;


// =============================================
// STUDENT.HTML FUNCTIONALITY
// Enhanced Student Page Functionality
function initializeEnhancedStudentPage() {
    // Load enhanced student data
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateEnhancedStudentHeader();
    }

    // Initialize enhanced features
    initializeEnhancedStudentFeatures();
    setupEnhancedEventListeners();
    
    showNotification("Welcome to your enhanced dashboard!", "success");
}

function updateEnhancedStudentHeader() {
    // Update header with real data
    if (currentUser) {
        const studentName = document.querySelector('.student-name');
        if (studentName) {
            studentName.textContent = currentUser.username || 'John Doe';
        }
    }
}

function initializeEnhancedStudentFeatures() {
    // Initialize character counter for request form
    const requestText = document.getElementById('requestText');
    if (requestText) {
        requestText.addEventListener('input', function() {
            const charCount = document.querySelector('.char-count');
            if (charCount) {
                charCount.textContent = `${this.value.length}/750 characters`;
            }
        });
    }

    // Initialize file upload functionality
    const fileUploadArea = document.querySelector('.file-upload-area');
    const resumeFile = document.getElementById('resumeFile');
    
    if (fileUploadArea && resumeFile) {
        // Drag and drop functionality
        fileUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUploadArea.style.borderColor = '#667eea';
            fileUploadArea.style.background = '#f8f9ff';
        });

        fileUploadArea.addEventListener('dragleave', () => {
            fileUploadArea.style.borderColor = '#ddd';
            fileUploadArea.style.background = 'white';
        });

        fileUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            fileUploadArea.style.borderColor = '#ddd';
            fileUploadArea.style.background = 'white';
            
            if (e.dataTransfer.files.length > 0) {
                resumeFile.files = e.dataTransfer.files;
                showNotification('File ready for upload!', 'success');
            }
        });

        // Click to browse
        fileUploadArea.addEventListener('click', () => {
            resumeFile.click();
        });

        resumeFile.addEventListener('change', function() {
            if (this.files.length > 0) {
                showNotification(`Selected file: ${this.files[0].name}`, 'info');
            }
        });
    }

    // Initialize search functionality
    const studentSearch = document.getElementById('studentSearch');
    if (studentSearch) {
        studentSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchStudentActivities(this.value);
            }
        });
    }
}

function setupEnhancedEventListeners() {
    // Filter buttons for certificates
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterCertificates(this.textContent.toLowerCase());
        });
    });

    // Notification bell
    const notificationBell = document.querySelector('.notification-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', showNotifications);
    }
}

function searchStudentActivities(searchTerm) {
    if (!searchTerm.trim()) {
        showNotification('Please enter a search term', 'error');
        return;
    }

    // Simulate search
    showNotification(`Searching for: "${searchTerm}"`, 'info');
    
    // In real implementation, this would filter activities
    setTimeout(() => {
        const results = studentActivities.filter(activity => 
            activity.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            activity.domain.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (results.length > 0) {
            showNotification(`Found ${results.length} matching activities`, 'success');
        } else {
            showNotification('No activities found matching your search', 'error');
        }
    }, 1000);
}

function filterCertificates(filter) {
    const certificates = document.querySelectorAll('.certificate-item');
    
    certificates.forEach(cert => {
        if (filter === 'all') {
            cert.style.display = 'flex';
        } else if (filter === 'approved') {
            cert.style.display = cert.classList.contains('approved') ? 'flex' : 'none';
        } else if (filter === 'pending') {
            cert.style.display = cert.classList.contains('pending') ? 'flex' : 'none';
        }
    });
}

function showNotifications() {
    const notifications = [
        "Your NCC certificate has been approved!",
        "New workshop opportunity available",
        "Reminder: Hackathon submission due in 3 days"
    ];

    const notificationHTML = notifications.map(notif => 
        `<div class="notification-item">${notif}</div>`
    ).join('');

    // Create notification dropdown
    const existingDropdown = document.querySelector('.notification-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }

    const dropdown = document.createElement('div');
    dropdown.className = 'notification-dropdown';
    dropdown.innerHTML = `
        <div class="dropdown-header">
            <h4>Notifications</h4>
            <span class="clear-all">Clear All</span>
        </div>
        <div class="notification-list">
            ${notificationHTML}
        </div>
    `;

    dropdown.style.cssText = `
        position: absolute;
        top: 60px;
        right: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        width: 300px;
        z-index: 1000;
    `;

    document.querySelector('.student-profile-header').appendChild(dropdown);

    // Clear all functionality
    dropdown.querySelector('.clear-all').addEventListener('click', () => {
        dropdown.remove();
        document.querySelector('.notification-count').textContent = '0';
    });

    // Close on outside click
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && e.target !== document.querySelector('.notification-bell')) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 100);
}

// Enhanced modal toggle functions
window.toggleRequestForm = function() {
    const modal = document.getElementById('requestModal');
    if (modal) {
        modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
    }
}

window.toggleResumeUpload = function() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
    }
}

// Update the main initialization to use enhanced version
// Replace the existing initializeStudentPage call with:
// initializeEnhancedStudentPage();

// =============================================
// =============================================
// FACULTY.HTML FUNCTIONALITY

// =============================================
// ENHANCED FACULTY PAGE FUNCTIONALITY
// =============================================

// Global variables for faculty
let cameraStream = null;
let capturedPhoto = null;
let attendanceRecords = [];
let classStudents = [];

function initializeEnhancedFacultyPage() {
    // Load faculty data
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateEnhancedFacultyHeader();
    }

    // Initialize sample data
    initializeEnhancedFacultyData();
    
    // Load initial views
    loadEnhancedVerificationQueue();
    loadEnhancedApprovedCertificates();
    loadEnhancedStudentRequests();
    loadClassStudents();
    
    // Set up event listeners
    setupEnhancedFacultyEventListeners();
    
    showNotification("Faculty dashboard loaded successfully!", "success");
}

function updateEnhancedFacultyHeader() {
    if (currentUser) {
        const facultyInfo = document.querySelector('.profile-info');
        if (facultyInfo) {
            facultyInfo.querySelector('.faculty-name').textContent = currentUser.username;
            facultyInfo.querySelector('.department').textContent = 
                currentUser.domain ? currentUser.domain.charAt(0).toUpperCase() + currentUser.domain.slice(1) : 'All Departments';
        }
    }
}

function initializeEnhancedFacultyData() {
    // Enhanced sample pending certificates
    pendingCertificates = [
        {
            id: 1,
            studentName: "John Doe",
            rollNo: "S123",
            branch: "CSE",
            year: "Third Year",
            eventName: "NCC Beat-link Certificate",
            domain: "clubs",
            subdomain: "ncc",
            description: "National Cadet Corps participation certificate with excellent performance",
            submissionDate: "2025-09-27",
            fileName: "ncc_certificate.pdf",
            studentId: "student123",
            status: "pending"
        },
        {
            id: 2,
            studentName: "Jane Smith",
            rollNo: "S124",
            branch: "IT",
            year: "Second Year",
            eventName: "Hackathon 2025",
            domain: "technical",
            subdomain: "hackathon",
            description: "Smart India Hackathon participation with innovative project",
            submissionDate: "2025-09-28",
            fileName: "hackathon_certificate.pdf",
            studentId: "student124",
            status: "pending"
        },
        {
            id: 3,
            studentName: "Mike Johnson",
            rollNo: "S125",
            branch: "CSE",
            year: "Final Year",
            eventName: "Dance Competition",
            domain: "clubs",
            subdomain: "dance",
            description: "Inter-college dance competition winner with outstanding performance",
            submissionDate: "2025-09-29",
            fileName: "dance_certificate.pdf",
            studentId: "student125",
            status: "pending"
        }
    ];

    // Enhanced sample student requests
    studentRequests = [
        {
            id: 1,
            studentName: "John Doe",
            rollNo: "S123",
            requestType: "Certificate Verification",
            message: "Please verify my NCC certificate urgently for upcoming placement interviews. The company requires verified certificates.",
            date: "2025-09-28",
            status: "pending",
            priority: "high"
        },
        {
            id: 2,
            studentName: "Jane Smith",
            rollNo: "S124",
            requestType: "Guidance",
            message: "Need guidance regarding technical workshop participation and certificate requirements for my specialization.",
            date: "2025-09-27",
            status: "pending",
            priority: "medium"
        },
        {
            id: 3,
            studentName: "Alice Brown",
            rollNo: "S126",
            requestType: "Certificate Issue",
            message: "There seems to be an error in my technical workshop certificate. Can you please review and correct it?",
            date: "2025-09-26",
            status: "resolved",
            priority: "medium"
        }
    ];

    // Enhanced sample approved certificates
    approvedCertificates = [
        {
            id: 1,
            studentName: "Alice Brown",
            rollNo: "S126",
            eventName: "Technical Workshop on AI",
            approvalDate: "2025-09-26",
            verifiedBy: "Dr. Rajesh Sharma",
            domain: "technical",
            subdomain: "workshop"
        },
        {
            id: 2,
            studentName: "Bob Wilson",
            rollNo: "S127",
            eventName: "Basketball Tournament",
            approvalDate: "2025-09-25",
            verifiedBy: "Dr. Rajesh Sharma",
            domain: "sports",
            subdomain: "field"
        }
    ];

    // Initialize class students for attendance
    classStudents = [
        { id: 1, name: "John Doe", rollNo: "S123", branch: "CSE", present: false },
        { id: 2, name: "Jane Smith", rollNo: "S124", branch: "IT", present: false },
        { id: 3, name: "Mike Johnson", rollNo: "S125", branch: "CSE", present: false },
        { id: 4, name: "Alice Brown", rollNo: "S126", branch: "ECE", present: false },
        { id: 5, name: "Bob Wilson", rollNo: "S127", branch: "ME", present: false },
        { id: 6, name: "Carol Davis", rollNo: "S128", branch: "CSE", present: false },
        { id: 7, name: "David Miller", rollNo: "S129", branch: "IT", present: false },
        { id: 8, name: "Eva Garcia", rollNo: "S130", branch: "ECE", present: false }
    ];

    // Initialize attendance records
    attendanceRecords = [];
}

function loadClassStudents() {
    // This would typically load from an API
    console.log("Class students loaded:", classStudents.length);
}

function setupEnhancedFacultyEventListeners() {
    // Contact Admin Modal
    const contactAdminBtn = document.getElementById('contactAdminBtn');
    const contactModal = document.getElementById('contactAdminModal');
    const closeBtn = document.querySelector('.close');
    const contactForm = document.getElementById('contactAdminForm');

    if (contactAdminBtn && contactModal) {
        contactAdminBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            showNotification('Message sent to administration successfully!', 'success');
            contactModal.style.display = 'none';
            contactForm.reset();
        });
    }

    // Search functionality
    const searchInput = document.getElementById('studentSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchStudents();
            }
        });
    }

    // File upload for class photo
    const classPhotoInput = document.getElementById('classPhoto');
    if (classPhotoInput) {
        classPhotoInput.addEventListener('change', handleClassPhotoUpload);
    }

    // Update badge counts
    updateBadgeCounts();
}

// =============================================
// CERTIFICATE VERIFICATION ENHANCED FUNCTIONS
// =============================================

function loadEnhancedVerificationQueue() {
    const verificationList = document.getElementById('verificationList');
    if (!verificationList) return;

    if (pendingCertificates.length === 0) {
        verificationList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-check-circle"></i>
                <h3>No Pending Certificates</h3>
                <p>All certificates have been verified. Great work!</p>
            </div>
        `;
        return;
    }

    verificationList.innerHTML = pendingCertificates.map(cert => `
        <div class="certificate-item-enhanced ${cert.status}" data-certificate-id="${cert.id}">
            <div class="certificate-icon">
                <i class="fas ${cert.status === 'pending' ? 'fa-clock' : 'fa-check-circle'}"></i>
            </div>
            <div class="certificate-info">
                <h4>${cert.eventName}</h4>
                <div class="certificate-details">
                    <strong>Student:</strong> ${cert.studentName} (${cert.rollNo})<br>
                    <strong>Domain:</strong> ${cert.domain} • ${cert.subdomain}<br>
                    <strong>Branch:</strong> ${cert.branch} • ${cert.year}
                </div>
                <p>${cert.description}</p>
                <div class="certificate-date">
                    <i class="fas fa-calendar"></i> Submitted: ${cert.submissionDate}
                </div>
            </div>
            <div class="certificate-actions">
                <button class="reject-btn" onclick="rejectCertificate(${cert.id})">
                    <i class="fas fa-times"></i> Reject
                </button>
                <button class="approve-btn" onclick="approveCertificate(${cert.id})">
                    <i class="fas fa-check"></i> Approve
                </button>
            </div>
        </div>
    `).join('');

    updateBadgeCounts();
}

function approveCertificate(certificateId) {
    const certificate = pendingCertificates.find(cert => cert.id === certificateId);
    if (!certificate) return;

    // Show confirmation dialog
    if (confirm(`Approve certificate for ${certificate.studentName}?`)) {
        // Remove from pending
        pendingCertificates = pendingCertificates.filter(cert => cert.id !== certificateId);
        
        // Add to approved
        approvedCertificates.unshift({
            ...certificate,
            approvalDate: new Date().toISOString().split('T')[0],
            verifiedBy: currentUser ? currentUser.username : 'Faculty',
            status: 'approved'
        });

        // Update student's certificate status
        updateStudentCertificateStatus(certificate.studentId, certificateId, 'approved');

        // Reload displays
        loadEnhancedVerificationQueue();
        loadEnhancedApprovedCertificates();
        
        showNotification(`✅ Certificate approved for ${certificate.studentName}`, 'success');
        
        // Update progress
        updateProgressOverview();
    }
}

function rejectCertificate(certificateId) {
    const certificate = pendingCertificates.find(cert => cert.id === certificateId);
    if (!certificate) return;

    const reason = prompt(`Enter reason for rejecting ${certificate.eventName} certificate for ${certificate.studentName}:`);
    if (reason === null) return; // User cancelled

    if (reason.trim() === '') {
        showNotification('Please provide a reason for rejection.', 'error');
        return;
    }

    // Remove from pending
    pendingCertificates = pendingCertificates.filter(cert => cert.id !== certificateId);
    
    // Update student's certificate status
    updateStudentCertificateStatus(certificate.studentId, certificateId, 'rejected', reason);

    // Reload display
    loadEnhancedVerificationQueue();
    
    showNotification(`❌ Certificate rejected for ${certificate.studentName}`, 'error');
    
    // Update progress
    updateProgressOverview();
}

function filterCertificates(filter) {
    const certificates = document.querySelectorAll('.certificate-item-enhanced');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    certificates.forEach(cert => {
        switch(filter) {
            case 'all':
                cert.style.display = 'flex';
                break;
            case 'pending':
                cert.style.display = cert.classList.contains('pending') ? 'flex' : 'none';
                break;
            case 'approved':
                cert.style.display = cert.classList.contains('approved') ? 'flex' : 'none';
                break;
        }
    });
}

// =============================================
// SMART ATTENDANCE SYSTEM
// =============================================

function toggleSmartAttendance() {
    const attendanceSection = document.getElementById('attendanceSection');
    const verificationSection = document.getElementById('verificationSection');
    const reportSection = document.getElementById('reportSection');
    
    if (attendanceSection.style.display === 'none') {
        // Show attendance section, hide others
        attendanceSection.style.display = 'block';
        verificationSection.style.display = 'none';
        reportSection.style.display = 'none';
        
        // Update active states
        updateActiveSection('attendance');
        showNotification('Smart Attendance system activated', 'info');
    } else {
        attendanceSection.style.display = 'none';
        verificationSection.style.display = 'block';
    }
}

function toggleVerificationSection() {
    const attendanceSection = document.getElementById('attendanceSection');
    const verificationSection = document.getElementById('verificationSection');
    const reportSection = document.getElementById('reportSection');
    
    verificationSection.style.display = 'block';
    attendanceSection.style.display = 'none';
    reportSection.style.display = 'none';
    
    updateActiveSection('verification');
}

function toggleReportSection() {
    const attendanceSection = document.getElementById('attendanceSection');
    const verificationSection = document.getElementById('verificationSection');
    const reportSection = document.getElementById('reportSection');
    
    reportSection.style.display = 'block';
    attendanceSection.style.display = 'none';
    verificationSection.style.display = 'none';
    
    updateActiveSection('report');
}

function updateActiveSection(activeSection) {
    // This function would update visual indicators for active section
    console.log(`Active section: ${activeSection}`);
}

async function startCamera() {
    try {
        const cameraFeed = document.getElementById('cameraFeed');
        const cameraPlaceholder = document.querySelector('.camera-placeholder');
        const captureBtn = document.querySelector('.capture-btn');
        const processBtn = document.querySelector('.process-btn');
        
        // Request camera access
        cameraStream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: 640, height: 480 } 
        });
        
        // Show camera feed
        cameraFeed.srcObject = cameraStream;
        cameraFeed.style.display = 'block';
        cameraPlaceholder.style.display = 'none';
        captureBtn.style.display = 'flex';
        processBtn.style.display = 'none';
        
        showNotification('Camera activated successfully', 'success');
        
    } catch (error) {
        console.error('Error accessing camera:', error);
        showNotification('Could not access camera. Please check permissions.', 'error');
    }
}

function capturePhoto() {
    const cameraFeed = document.getElementById('cameraFeed');
    const captureCanvas = document.getElementById('captureCanvas');
    const processBtn = document.querySelector('.process-btn');
    
    // Set canvas dimensions to match video
    captureCanvas.width = cameraFeed.videoWidth;
    captureCanvas.height = cameraFeed.videoHeight;
    
    // Draw current video frame to canvas
    const context = captureCanvas.getContext('2d');
    context.drawImage(cameraFeed, 0, 0, captureCanvas.width, captureCanvas.height);
    
    // Get image data
    capturedPhoto = captureCanvas.toDataURL('image/png');
    
    // Show process button
    processBtn.style.display = 'flex';
    
    showNotification('Photo captured successfully', 'success');
}

function processAttendance() {
    if (!capturedPhoto) {
        showNotification('Please capture a photo first', 'error');
        return;
    }
    
    showNotification('Processing attendance with AI face recognition...', 'info');
    
    // Simulate AI processing delay
    setTimeout(() => {
        // Simulate face recognition results
        const recognizedStudents = simulateFaceRecognition();
        
        // Update attendance records
        updateAttendanceResults(recognizedStudents);
        
        showNotification(`Attendance processed: ${recognizedStudents.length} students recognized`, 'success');
        
    }, 3000);
}

function simulateFaceRecognition() {
    // Simulate AI face recognition with random results
    const recognizedStudents = [];
    
    classStudents.forEach(student => {
        // 80% chance of being recognized as present
        if (Math.random() < 0.8) {
            recognizedStudents.push({
                ...student,
                present: true,
                confidence: (Math.random() * 30 + 70).toFixed(1) + '%' // 70-100% confidence
            });
        } else {
            recognizedStudents.push({
                ...student,
                present: false,
                confidence: 'Not detected'
            });
        }
    });
    
    return recognizedStudents;
}

function updateAttendanceResults(students) {
    const resultsList = document.getElementById('resultsList');
    const presentCount = students.filter(s => s.present).length;
    const totalCount = students.length;
    
    resultsList.innerHTML = `
        <div class="attendance-summary">
            <div class="summary-item">
                <span class="summary-value">${presentCount}/${totalCount}</span>
                <span class="summary-label">Present</span>
            </div>
            <div class="summary-item">
                <span class="summary-value">${((presentCount / totalCount) * 100).toFixed(1)}%</span>
                <span class="summary-label">Attendance</span>
            </div>
        </div>
        ${students.map(student => `
            <div class="attendance-item ${student.present ? 'present' : 'absent'}">
                <div class="student-attendance-info">
                    <div class="student-attendance-name">${student.name}</div>
                    <div class="student-attendance-details">
                        ${student.rollNo} • ${student.branch} • Confidence: ${student.confidence}
                    </div>
                </div>
                <div class="attendance-status ${student.present ? 'status-present' : 'status-absent'}">
                    ${student.present ? 'Present' : 'Absent'}
                </div>
            </div>
        `).join('')}
    `;
    
    // Update attendance records
    attendanceRecords.push({
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString(),
        present: presentCount,
        total: totalCount,
        percentage: ((presentCount / totalCount) * 100).toFixed(1)
    });
    
    // Update progress overview
    updateProgressOverview();
}

function uploadClassPhoto() {
    const uploadModal = document.getElementById('uploadModal');
    uploadModal.style.display = 'block';
}

function closeUploadModal() {
    const uploadModal = document.getElementById('uploadModal');
    uploadModal.style.display = 'none';
}

function handleClassPhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showNotification('Please upload an image file', 'error');
        return;
    }
    
    showNotification('Processing uploaded class photo...', 'info');
    
    const reader = new FileReader();
    reader.onload = function(e) {
        capturedPhoto = e.target.result;
        
        // Close modal
        closeUploadModal();
        
        // Process the uploaded photo
        setTimeout(() => {
            const recognizedStudents = simulateFaceRecognition();
            updateAttendanceResults(recognizedStudents);
            showNotification('Class photo processed successfully', 'success');
        }, 2000);
    };
    
    reader.readAsDataURL(file);
}

// =============================================
// REPORT GENERATION ENHANCED FUNCTIONS
// =============================================

function generateReport() {
    const branch = document.getElementById('branchFilter').value;
    const department = document.getElementById('departmentFilter').value;
    const skill = document.getElementById('skillFilter').value;
    const dateRange = document.getElementById('dateFilter').value;
    
    // Show loading state
    const preview = document.getElementById('reportPreview');
    preview.innerHTML = `
        <div class="preview-header">
            <h3>Generating Report...</h3>
            <span class="preview-info">Please wait</span>
        </div>
        <div class="preview-content">
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Processing data and generating report</p>
            </div>
        </div>
    `;
    
    // Simulate report generation
    setTimeout(() => {
        const reportData = generateReportData(branch, department, skill, dateRange);
        displayReportPreview(reportData);
        showNotification('Report generated successfully!', 'success');
    }, 2500);
}

function generateReportData(branch, department, skill, dateRange) {
    // Simulate report data based on filters
    const totalStudents = 45;
    const certifiedStudents = 32;
    const pendingCertificates = 5;
    const avgCertificates = 2.8;
    
    return {
        branch,
        department,
        skill,
        dateRange,
        totalStudents,
        certifiedStudents,
        pendingCertificates,
        avgCertificates,
        certificationRate: ((certifiedStudents / totalStudents) * 100).toFixed(1),
        topDomains: [
            { domain: 'Technical', count: 15, percentage: '46.9%' },
            { domain: 'Clubs', count: 12, percentage: '37.5%' },
            { domain: 'Sports', count: 5, percentage: '15.6%' }
        ],
        recentActivity: [
            { student: 'John Doe', action: 'Certificate Approved', date: '2025-09-28' },
            { student: 'Jane Smith', action: 'Certificate Submitted', date: '2025-09-27' },
            { student: 'Mike Johnson', action: 'Certificate Rejected', date: '2025-09-26' }
        ]
    };
}

function displayReportPreview(reportData) {
    const preview = document.getElementById('reportPreview');
    
    preview.innerHTML = `
        <div class="preview-header">
            <h3>Report Preview</h3>
            <span class="preview-info">Filters: ${getActiveFilters(reportData)}</span>
        </div>
        <div class="preview-content">
            <div class="report-stats">
                <div class="report-stat">
                    <span class="stat-value">${reportData.totalStudents}</span>
                    <span class="stat-label">Total Students</span>
                </div>
                <div class="report-stat">
                    <span class="stat-value">${reportData.certifiedStudents}</span>
                    <span class="stat-label">Certified</span>
                </div>
                <div class="report-stat">
                    <span class="stat-value">${reportData.certificationRate}%</span>
                    <span class="stat-label">Certification Rate</span>
                </div>
                <div class="report-stat">
                    <span class="stat-value">${reportData.avgCertificates}</span>
                    <span class="stat-label">Avg. Certificates</span>
                </div>
            </div>
            
            <div class="domain-breakdown">
                <h4>Domain Distribution</h4>
                ${reportData.topDomains.map(domain => `
                    <div class="domain-item">
                        <span class="domain-name">${domain.domain}</span>
                        <div class="domain-bar">
                            <div class="domain-fill" style="width: ${domain.percentage}"></div>
                        </div>
                        <span class="domain-count">${domain.count} (${domain.percentage})</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="report-actions">
                <button class="download-btn" onclick="downloadReport('pdf')">
                    <i class="fas fa-file-pdf"></i> Download PDF
                </button>
                <button class="download-btn" onclick="downloadReport('excel')">
                    <i class="fas fa-file-excel"></i> Download Excel
                </button>
            </div>
        </div>
    `;
}

function getActiveFilters(reportData) {
    const filters = [];
    if (reportData.branch) filters.push(`Branch: ${reportData.branch}`);
    if (reportData.department) filters.push(`Dept: ${reportData.department}`);
    if (reportData.skill) filters.push(`Skill: ${reportData.skill}`);
    if (reportData.dateRange !== 'all') filters.push(`Date: ${reportData.dateRange}`);
    
    return filters.length > 0 ? filters.join(', ') : 'All Students';
}

function downloadReport(format) {
    showNotification(`Downloading report in ${format.toUpperCase()} format...`, 'success');
    // In real implementation, this would generate and download the actual file
}

// =============================================
// ENHANCED FOOTER FUNCTIONS
// =============================================

function loadEnhancedApprovedCertificates() {
    const approvedList = document.getElementById('approvedCertificates');
    if (!approvedList) return;

    if (approvedCertificates.length === 0) {
        approvedList.innerHTML = '<p class="no-data">No approved certificates yet</p>';
        return;
    }

    approvedList.innerHTML = approvedCertificates.map(cert => `
        <div class="approved-item">
            <div class="approved-info">
                <h4>${cert.eventName}</h4>
                <div class="approved-details">
                    ${cert.studentName} (${cert.rollNo}) • ${cert.domain}/${cert.subdomain}
                </div>
                <div class="request-meta">
                    Approved on ${cert.approvalDate} by ${cert.verifiedBy}
                </div>
            </div>
        </div>
    `).join('');
}

function loadEnhancedStudentRequests() {
    const requestsList = document.getElementById('studentRequests');
    if (!requestsList) return;

    const pendingRequests = studentRequests.filter(req => req.status === 'pending');
    
    if (pendingRequests.length === 0) {
        requestsList.innerHTML = '<p class="no-data">No pending requests</p>';
        return;
    }

    requestsList.innerHTML = pendingRequests.map(request => `
        <div class="request-item">
            <div class="request-info">
                <h4>${request.requestType}</h4>
                <div class="request-details">
                    ${request.studentName} (${request.rollNo})
                </div>
                <p>${request.message}</p>
                <div class="request-meta">
                    Received: ${request.date} • 
                    <span class="priority ${request.priority}">${request.priority}</span>
                </div>
            </div>
            <button class="resolve-btn" onclick="resolveRequest(${request.id})">
                Mark Resolved
            </button>
        </div>
    `).join('');
}

function resolveRequest(requestId) {
    const request = studentRequests.find(req => req.id === requestId);
    if (!request) return;

    request.status = 'resolved';
    loadEnhancedStudentRequests();
    updateBadgeCounts();
    showNotification(`Request from ${request.studentName} marked as resolved`, 'success');
}

function showStudentRequests() {
    // Scroll to requests section
    document.querySelector('.faculty-footer-enhanced').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// =============================================
// UTILITY FUNCTIONS
// =============================================

function searchStudents() {
    const searchTerm = document.getElementById('studentSearch').value.trim();
    if (!searchTerm) {
        showNotification('Please enter a search term', 'error');
        return;
    }

    // Search across certificates and students
    const certificateResults = pendingCertificates.filter(cert => 
        cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.eventName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const studentResults = classStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (certificateResults.length > 0 || studentResults.length > 0) {
        showNotification(`Found ${certificateResults.length} certificates and ${studentResults.length} students matching "${searchTerm}"`, 'success');
        
        // In real implementation, display search results in a modal or dedicated section
        displaySearchResults(certificateResults, studentResults);
    } else {
        showNotification('No results found matching your search', 'error');
    }
}

function displaySearchResults(certificates, students) {
    // This would display results in a modal or dedicated section
    console.log('Certificate results:', certificates);
    console.log('Student results:', students);
}

function updateBadgeCounts() {
    const pendingCount = pendingCertificates.length;
    const requestCount = studentRequests.filter(req => req.status === 'pending').length;
    
    // Update header badges
    const pendingCountElement = document.getElementById('pendingCount');
    const requestsBadge = document.getElementById('requestsBadge');
    const pendingBadge = document.getElementById('pendingBadge');
    
    if (pendingCountElement) pendingCountElement.textContent = pendingCount;
    if (requestsBadge) requestsBadge.textContent = `${requestCount} New`;
    if (pendingBadge) pendingBadge.textContent = `${pendingCount} Pending`;
}

function updateProgressOverview() {
    const totalCertificates = pendingCertificates.length + approvedCertificates.length;
    const progressPercentage = totalCertificates > 0 ? 
        (approvedCertificates.length / totalCertificates) * 100 : 0;
    
    // Update progress bars (simplified)
    console.log('Progress overview updated');
}

function updateStudentCertificateStatus(studentId, certificateId, status, reason = '') {
    // In real application, this would make an API call to update the student's record
    console.log(`Updating certificate ${certificateId} for student ${studentId} to status: ${status}`, reason);
}

function closeModal() {
    const modal = document.getElementById('contactAdminModal');
    modal.style.display = 'none';
}

// Stop camera when leaving page
window.addEventListener('beforeunload', () => {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
    }
});

// Update the main initialization to use enhanced version
// In your page detection switch, change:
// case 'faculty.html': initializeEnhancedFacultyPage(); break;

// =============================================
// VISITOR/EXTERNAL VERIFIER FUNCTIONALITY

// =============================================
// ENHANCED VISITOR/RECRUITER PAGE FUNCTIONALITY
// =============================================

// Global variables for visitor
let qrCameraStream = null;
let visitorPosts = [];
let recentVerifications = [];

function initializeEnhancedVisitorPage() {
    // Load visitor data
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateEnhancedVisitorHeader();
    }

    // Initialize sample data
    initializeEnhancedVisitorData();
    
    // Load initial views
    loadRecentVerifications();
    loadRecentPosts();
    loadTopAchievers();
    initializeChart();
    updateQuickStats();
    
    // Set up event listeners
    setupEnhancedVisitorEventListeners();
    
    showNotification("Recruiter dashboard loaded successfully!", "success");
}

function updateEnhancedVisitorHeader() {
    if (currentUser) {
        const visitorInfo = document.querySelector('.profile-info');
        if (visitorInfo) {
            visitorInfo.querySelector('.visitor-name').textContent = currentUser.username;
            
            // Set company based on username for demo
            const companyMap = {
                'recruiter': 'Tech Innovations Inc.',
                'verifier': 'Global Certifications Ltd.',
                'admin': 'Campus Placement Cell'
            };
            visitorInfo.querySelector('.company').textContent = 
                companyMap[currentUser.username.toLowerCase()] || 'External Organization';
        }
        
        // Update badge counts
        updateVisitorBadgeCounts();
    }
}

function initializeEnhancedVisitorData() {
    // Sample recent verifications
    recentVerifications = [
        {
            id: 1,
            studentName: "John Doe",
            rollNo: "S123",
            eventName: "NCC Beat-link Certificate",
            verificationDate: "2025-09-28",
            confidence: "98%",
            status: "valid"
        },
        {
            id: 2,
            studentName: "Jane Smith",
            rollNo: "S124",
            eventName: "Hackathon 2025",
            verificationDate: "2025-09-27",
            confidence: "95%",
            status: "valid"
        },
        {
            id: 3,
            studentName: "Mike Johnson",
            rollNo: "S125",
            eventName: "Dance Competition",
            verificationDate: "2025-09-26",
            confidence: "92%",
            status: "valid"
        }
    ];

    // Sample visitor posts
    visitorPosts = [
        {
            id: 1,
            type: "job",
            title: "Software Engineer Intern",
            description: "Looking for talented CS students for summer internship program with focus on web development and AI technologies.",
            deadline: "2025-10-15",
            contact: "hr@techinnovations.com",
            date: "2025-09-25",
            status: "active"
        },
        {
            id: 2,
            type: "workshop",
            title: "AI & Machine Learning Workshop",
            description: "Hands-on workshop on practical AI applications and machine learning algorithms for beginners to advanced students.",
            deadline: "2025-10-10",
            contact: "events@techinnovations.com",
            date: "2025-09-20",
            status: "active"
        }
    ];

    // Initialize top achievers data
    topAchievers = {
        sports: [
            { name: "Aarav Sharma", rollNo: "S101", badges: 8, branch: "CSE", skills: ["Leadership", "Teamwork", "Athletics"] },
            { name: "Priya Patel", rollNo: "S102", badges: 6, branch: "ME", skills: ["Swimming", "Basketball", "Discipline"] },
            { name: "Rohan Kumar", rollNo: "S103", badges: 5, branch: "CIVIL", skills: ["Cricket", "Football", "Coordination"] }
        ],
        clubs: [
            { name: "Ananya Singh", rollNo: "S201", badges: 9, branch: "CSE", skills: ["Leadership", "Public Speaking", "Organization"] },
            { name: "Vikram Joshi", rollNo: "S202", badges: 7, branch: "IT", skills: ["Drama", "Creative Writing", "Team Management"] },
            { name: "Meera Desai", rollNo: "S203", badges: 6, branch: "EEE", skills: ["Debate", "Research", "Critical Thinking"] }
        ],
        technical: [
            { name: "Rajesh Kumar", rollNo: "S301", badges: 10, branch: "CSE", skills: ["Python", "AI/ML", "Data Structures"] },
            { name: "Sneha Iyer", rollNo: "S302", badges: 8, branch: "IT", skills: ["JavaScript", "React", "Algorithms"] },
            { name: "Amit Verma", rollNo: "S303", badges: 7, branch: "CSE", skills: ["Java", "Spring Boot", "Database Design"] }
        ]
    };
}

function setupEnhancedVisitorEventListeners() {
    // Contact Admin Modal
    const contactAdminBtn = document.getElementById('contactAdminBtn');
    const contactModal = document.getElementById('contactAdminModal');
    const closeBtn = document.querySelector('.close');
    const contactForm = document.getElementById('contactAdminForm');

    if (contactAdminBtn && contactModal) {
        contactAdminBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Message sent to campus administration!', 'success');
            contactModal.style.display = 'none';
            contactForm.reset();
        });
    }

    // QR Upload functionality
    const qrUpload = document.getElementById('qrUpload');
    if (qrUpload) {
        qrUpload.addEventListener('change', handleQRUpload);
    }

    // Search functionality
    const searchInput = document.getElementById('studentSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchTopStudents();
            }
        });
    }
}

// =============================================
// QR VERIFICATION ENHANCED FUNCTIONS
// =============================================

function toggleVerificationSection() {
    const verificationSection = document.getElementById('verificationSection');
    const analyticsSection = document.getElementById('analyticsSection');
    const postingSection = document.getElementById('postingSection');
    
    verificationSection.style.display = 'block';
    analyticsSection.style.display = 'none';
    postingSection.style.display = 'none';
    
    updateActiveSection('verification');
}

function toggleAnalyticsSection() {
    const verificationSection = document.getElementById('verificationSection');
    const analyticsSection = document.getElementById('analyticsSection');
    const postingSection = document.getElementById('postingSection');
    
    analyticsSection.style.display = 'block';
    verificationSection.style.display = 'none';
    postingSection.style.display = 'none';
    
    updateActiveSection('analytics');
}

function togglePostingSection() {
    const verificationSection = document.getElementById('verificationSection');
    const analyticsSection = document.getElementById('analyticsSection');
    const postingSection = document.getElementById('postingSection');
    
    postingSection.style.display = 'block';
    verificationSection.style.display = 'none';
    analyticsSection.style.display = 'none';
    
    updateActiveSection('posting');
}

function updateActiveSection(activeSection) {
    // Update visual indicators for active section
    console.log(`Active section: ${activeSection}`);
}

function startQRScan() {
    const qrScannerModal = document.getElementById('qrScannerModal');
    qrScannerModal.style.display = 'block';
}

function closeQRScanner() {
    const qrScannerModal = document.getElementById('qrScannerModal');
    qrScannerModal.style.display = 'none';
    
    // Stop camera if running
    if (qrCameraStream) {
        qrCameraStream.getTracks().forEach(track => track.stop());
        qrCameraStream = null;
    }
}

async function startCameraForQR() {
    try {
        const qrCameraFeed = document.getElementById('qrCameraFeed');
        const scannerPlaceholder = document.querySelector('.scanner-placeholder');
        
        // Request camera access
        qrCameraStream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: 640, height: 480, facingMode: 'environment' } 
        });
        
        // Show camera feed
        qrCameraFeed.srcObject = qrCameraStream;
        qrCameraFeed.style.display = 'block';
        scannerPlaceholder.style.display = 'none';
        
        showNotification('QR scanner activated', 'success');
        
        // Simulate QR detection
        setTimeout(() => {
            simulateQRDetection();
        }, 3000);
        
    } catch (error) {
        console.error('Error accessing camera:', error);
        showNotification('Could not access camera. Please check permissions.', 'error');
    }
}

function simulateQRDetection() {
    // Simulate QR code detection
    showNotification('QR code detected! Processing...', 'info');
    
    setTimeout(() => {
        closeQRScanner();
        verifyQRCode('scanned_qr_code.png');
    }, 2000);
}

function uploadQRImage() {
    document.getElementById('qrUpload').click();
}

function handleQRUpload(event) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        if (!file.type.startsWith('image/')) {
            showNotification('Please upload an image file', 'error');
            return;
        }
        
        showNotification('Processing QR image...', 'info');
        
        // Simulate processing
        setTimeout(() => {
            verifyQRCode(file.name);
        }, 2000);
    }
}

function verifyQRCode(filename) {
    const verificationResult = document.getElementById('verificationResult');
    const resultContent = document.getElementById('resultContent');
    
    // Simulate verification logic
    const isVerified = Math.random() > 0.1; // 90% chance of valid certificate
    
    if (isVerified) {
        const studentData = {
            name: "John Doe",
            rollNo: "S123",
            certificate: "NCC Beat-link Certificate",
            verifiedBy: "Dr. Rajesh Sharma",
            verificationDate: "2025-09-26",
            domain: "Clubs Community",
            subdomain: "NCC",
            issueDate: "2025-09-20",
            status: "Approved"
        };
        
        resultContent.innerHTML = `
            <div class="student-verification-info">
                <h4>Student Certificate Details</h4>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Student Name</span>
                        <span class="info-value">${studentData.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Roll Number</span>
                        <span class="info-value">${studentData.rollNo}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Certificate</span>
                        <span class="info-value">${studentData.certificate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Domain</span>
                        <span class="info-value">${studentData.domain}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Subdomain</span>
                        <span class="info-value">${studentData.subdomain}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Issue Date</span>
                        <span class="info-value">${studentData.issueDate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Verified By</span>
                        <span class="info-value">${studentData.verifiedBy}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Verification Date</span>
                        <span class="info-value">${studentData.verificationDate}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add to recent verifications
        recentVerifications.unshift({
            id: Date.now(),
            studentName: studentData.name,
            rollNo: studentData.rollNo,
            eventName: studentData.certificate,
            verificationDate: new Date().toISOString().split('T')[0],
            confidence: "98%",
            status: "valid"
        });
        
        loadRecentVerifications();
        updateVisitorBadgeCounts();
        
    } else {
        resultContent.innerHTML = `
            <div class="student-verification-info">
                <div class="verification-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h4>Certificate Verification Failed</h4>
                    <p>This certificate could not be verified through our system.</p>
                    <div class="error-details">
                        <p><strong>Possible reasons:</strong></p>
                        <ul>
                            <li>Certificate not approved by faculty</li>
                            <li>QR code damaged or incorrect</li>
                            <li>Certificate revoked or expired</li>
                            <li>Database connection issue</li>
                        </ul>
                    </div>
                    <p>Please contact the student or campus administration for clarification.</p>
                </div>
            </div>
        `;
        
        document.querySelector('.result-badge').className = 'result-badge invalid';
        document.querySelector('.result-badge').textContent = 'Invalid Certificate';
    }
    
    verificationResult.style.display = 'block';
    showNotification(`QR verification completed for ${filename}`, isVerified ? 'success' : 'error');
}

function downloadVerifiedCertificate() {
    showNotification('Downloading verified certificate...', 'success');
    // In real implementation, this would download the actual certificate
}

function contactStudent() {
    showNotification('Opening contact form for student...', 'info');
    // In real implementation, this would open a contact form
}

function loadRecentVerifications() {
    const verificationsList = document.getElementById('recentVerifications');
    if (!verificationsList) return;

    if (recentVerifications.length === 0) {
        verificationsList.innerHTML = '<p class="no-data">No recent verifications</p>';
        return;
    }

    // Show only last 2 verifications in the main list
    const recent = recentVerifications.slice(0, 2);
    
    verificationsList.innerHTML = recent.map(verification => `
        <div class="verification-item">
            <div class="verification-icon ${verification.status}">
                <i class="fas fa-${verification.status === 'valid' ? 'check-circle' : 'exclamation-triangle'}"></i>
            </div>
            <div class="verification-info">
                <h4>${verification.studentName} - ${verification.eventName}</h4>
                <p>Verified: ${verification.verificationDate} • Confidence: ${verification.confidence}</p>
            </div>
            <div class="verification-status ${verification.status}">${verification.status === 'valid' ? 'Valid' : 'Invalid'}</div>
        </div>
    `).join('');
}

// =============================================
// ANALYTICS & REPORTING ENHANCED FUNCTIONS
// =============================================

function generateAdvancedReport() {
    const domain = document.getElementById('domainFilter').value;
    const skill = document.getElementById('skillFilter').value;
    const minCertificates = document.getElementById('certificateFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    
    showNotification('Generating advanced analytics report...', 'info');
    
    // Simulate report generation
    setTimeout(() => {
        const reportData = generateAnalyticsData(domain, skill, minCertificates, sortBy);
        updateQuickStats();
        updateChart(reportData);
        showNotification('Advanced analytics report generated!', 'success');
    }, 3000);
}

function generateAnalyticsData(domain, skill, minCertificates, sortBy) {
    // Simulate analytics data based on filters
    return {
        totalStudents: 125,
        certifiedStudents: 89,
        averageCertificates: 2.8,
        topSkills: ["Programming", "Leadership", "Communication"],
        domainDistribution: {
            technical: 45,
            clubs: 35,
            sports: 20
        }
    };
}

function updateQuickStats() {
    const quickStats = document.getElementById('quickStats');
    if (!quickStats) return;
    
    const stats = {
        'Total Students': '125',
        'Certified': '89',
        'Avg. Certificates': '2.8',
        'Verification Rate': '98%',
        'Top Domain': 'Technical',
        'Active Recruiters': '23'
    };
    
    quickStats.innerHTML = Object.entries(stats).map(([label, value]) => `
        <div class="stat-item-enhanced">
            <span class="stat-value-enhanced">${value}</span>
            <span class="stat-label-enhanced">${label}</span>
        </div>
    `).join('');
}

function initializeChart() {
    const ctx = document.getElementById('domainChartCanvas');
    if (!ctx) return;
    
    // Sample chart data
    const data = {
        labels: ['Technical', 'Clubs', 'Sports'],
        datasets: [{
            label: 'Number of Students',
            data: [45, 35, 20],
            backgroundColor: [
                'rgba(102, 126, 234, 0.8)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(255, 152, 0, 0.8)'
            ],
            borderColor: [
                'rgba(102, 126, 234, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(255, 152, 0, 1)'
            ],
            borderWidth: 2
        }]
    };
    
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function updateChart(reportData) {
    // Update chart with new data
    console.log('Chart updated with:', reportData);
}

// =============================================
// JOB POSTING ENHANCED FUNCTIONS
// =============================================

function showPostForm() {
    const postForm = document.getElementById('postForm');
    postForm.style.display = 'block';
}

function hidePostForm() {
    const postForm = document.getElementById('postForm');
    postForm.style.display = 'none';
}

function submitOpportunity() {
    const type = document.getElementById('postType').value;
    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;
    const deadline = document.getElementById('postDeadline').value;
    const contact = document.getElementById('postContact').value;
    
    if (!title || !description || !deadline || !contact) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    const newPost = {
        id: Date.now(),
        type: type,
        title: title,
        description: description,
        deadline: deadline,
        contact: contact,
        date: new Date().toISOString().split('T')[0],
        status: 'active'
    };
    
    visitorPosts.unshift(newPost);
    savePostToCampusBoard(newPost);
    loadRecentPosts();
    
    // Clear form and hide
    document.getElementById('postTitle').value = '';
    document.getElementById('postDescription').value = '';
    document.getElementById('postDeadline').value = '';
    document.getElementById('postContact').value = '';
    hidePostForm();
    
    showNotification('Opportunity posted to campus board successfully!', 'success');
    updateVisitorBadgeCounts();
}

function loadRecentPosts() {
    const postsList = document.querySelector('.posts-list-enhanced');
    if (!postsList) return;
    
    if (visitorPosts.length === 0) {
        postsList.innerHTML = '<p class="no-data">No recent posts</p>';
        return;
    }
    
    postsList.innerHTML = visitorPosts.map(post => `
        <div class="post-item-enhanced">
            <div class="post-item-header">
                <div class="post-item-title">${post.title}</div>
                <div class="post-item-type">${post.type.toUpperCase()}</div>
            </div>
            <div class="post-item-description">${post.description}</div>
            <div class="post-item-meta">
                <span>Deadline: ${post.deadline}</span>
                <span>Posted: ${post.date}</span>
            </div>
        </div>
    `).join('');
}

function savePostToCampusBoard(post) {
    // In real implementation, this would save to a database
    const campusPosts = JSON.parse(sessionStorage.getItem('campusPosts') || '[]');
    campusPosts.push(post);
    sessionStorage.setItem('campusPosts', JSON.stringify(campusPosts));
}

// =============================================
// TOP ACHIEVERS FUNCTIONS
// =============================================

function showTopAchievers() {
    // Scroll to achievers section
    document.querySelector('.visitor-footer-enhanced').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function loadTopAchievers() {
    // Load all domains initially
    showDomain('sports');
    showDomain('clubs');
    showDomain('technical');
}

function showDomain(domain) {
    const achieversContainer = document.getElementById(domain + 'Achievers');
    if (!achieversContainer) return;
    
    const achievers = topAchievers[domain] || [];
    
    achieversContainer.innerHTML = achievers.map((student, index) => `
        <div class="achiever-item-enhanced">
            <div class="achiever-header">
                <div class="achiever-name">${student.name}</div>
                <div class="achiever-badges">${student.badges} Badges</div>
            </div>
            <div class="achiever-details">
                ${student.rollNo} • ${student.branch}
            </div>
            <div class="achiever-skills">
                ${student.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// =============================================
// UTILITY FUNCTIONS
// =============================================

function searchTopStudents() {
    const searchTerm = document.getElementById('studentSearch').value.trim();
    if (!searchTerm) {
        showNotification('Please enter a search term', 'error');
        return;
    }

    // Search across all domains
    const results = [];
    Object.values(topAchievers).forEach(domainStudents => {
        domainStudents.forEach(student => {
            if (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) {
                results.push(student);
            }
        });
    });
    
    if (results.length > 0) {
        showNotification(`Found ${results.length} top student(s) matching "${searchTerm}"`, 'success');
        // In real implementation, display search results
    } else {
        showNotification('No top students found matching your search', 'error');
    }
}

function updateVisitorBadgeCounts() {
    const verifiedCount = recentVerifications.length;
    const postsCount = visitorPosts.length;
    
    // Update header badges
    const verifiedCountElement = document.getElementById('verifiedCount');
    const postsCountElement = document.getElementById('postsCount');
    
    if (verifiedCountElement) verifiedCountElement.textContent = verifiedCount;
    if (postsCountElement) postsCountElement.textContent = postsCount;
}

function downloadTalentPool() {
    showNotification('Downloading talent pool data...', 'success');
    // In real implementation, this would download candidate data
}

function scheduleCampusVisit() {
    showNotification('Opening campus visit scheduling...', 'info');
    // In real implementation, this would open a scheduling interface
}

function contactAdmissions() {
    showNotification('Redirecting to admissions contact...', 'info');
    // In real implementation, this would open contact information
}

function closeModal() {
    const modal = document.getElementById('contactAdminModal');
    modal.style.display = 'none';
}

// Stop camera when leaving page
window.addEventListener('beforeunload', () => {
    if (qrCameraStream) {
        qrCameraStream.getTracks().forEach(track => track.stop());
    }
});

// Update the main initialization to use enhanced version
// In your page detection switch, change:
// case 'visitor.html': initializeEnhancedVisitorPage(); break;


// =============================================
// MAIN INITIALIZATION FUNCTION
// =============================================
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeEnhancedHomePage();
            break;
        case 'login.html':
             initializeEnhancedLoginPage();
            break;
        case 'student.html':
            initializeEnhancedStudentPage();
            break;
        case 'faculty.html':
            initializeEnhancedFacultyPage();
            break;
        case 'visitor.html':
             initializeEnhancedVisitorPage();
            break;
        default:
            initializeEnhancedHomePage();
    }

    // Global logout functionality
    const logoutLinks = document.querySelectorAll('a[href="login.html"]');
    logoutLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('logout')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                sessionStorage.removeItem('currentUser');
                currentUser = null;
                showNotification("Logged out successfully!", "success");
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1000);
            });
        }
    });
});

// =============================================
// GLOBAL WINDOW FUNCTIONS
// =============================================
window.redirectToLogin = function() {
    window.location.href = "login.html";
}

window.logout = function() {
    sessionStorage.removeItem('currentUser');
    currentUser = null;
    showNotification("Logged out successfully!", "success");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}