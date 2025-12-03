<script setup lang="ts">
const portfolioUrl = 'https://josepvg.dev/'
</script>

<template>
  <div class="about-container">
    <div class="about-card">
      <div class="about-header">
        <h1 class="about-title">About me</h1>
        <div class="about-divider"></div>
      </div>
      
      <div class="about-content">
        <div class="about-text">
          <p class="about-intro">
            Hello! I'm <strong>JosePVG-Dev</strong>, a developer passionate about creating interactive experiences and creative projects.
          </p>
          
          <p class="about-description">
            This project, <strong>Paint Like a Wiz</strong>, is one of my first works where I combined 
            creativity with programming to create a unique drawing experience with an interactive magical companion.
          </p>
          
          <p class="about-description">
            I love exploring new technologies, building modern web applications, and sharing my knowledge 
            with the developer community.
          </p>
        </div>
        
        <div class="about-cta">
          <a 
            :href="portfolioUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="portfolio-link"
          >
            <span>View my portfolio</span>
            <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
}

.about-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
  border-radius: 20px;
  padding: 3rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.about-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.about-title {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.about-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #7c3aed 0%, #6366f1 100%);
  margin: 0 auto;
  border-radius: 2px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-intro {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #4b5563;
}

.about-intro strong {
  color: #7c3aed;
  font-weight: 600;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6b7280;
}

.about-description strong {
  color: #6366f1;
  font-weight: 600;
}

.about-cta {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
}

.portfolio-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
}

.portfolio-link:active {
  transform: translateY(0);
}

.link-icon {
  width: 20px;
  height: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
  }
  
  .about-card {
    padding: 2rem;
  }
  
  .about-title {
    font-size: 2rem;
  }
  
  .about-intro {
    font-size: 1.1rem;
  }
  
  .about-description {
    font-size: 1rem;
  }
  
  .portfolio-link {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about-card {
    padding: 1.5rem;
  }
  
  .about-title {
    font-size: 1.75rem;
  }
}
</style>

