/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif', 'system-ui']
      },
      colors: {
        'theme-orange': '#EB9A61',
        'theme-red': '#E7555C',
        'theme-green': '#19BEAD',
        'theme-blue': '#628DE8',
        'theme-white': '#F9F4EA',
        'theme-yellow': '#EFDF35',
        'theme-black': '#1B2B3C',
        'theme-black-50': 'rgba(27, 43, 60, 0.5)',
        'theme-black-90': '#0a1d33',
        'theme-black-60': '#23527c',
        'theme-grey-dark': '#E2E4EA',
        'theme-grey': '#F0F1F4'
      },
      boxShadow: {
        videoShadow: 'inset 0px -200px 32px 200px rgba(0,0,0,0.21)'
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(2rem, 1fr))',
        auto2: 'repeat(auto-fill, minmax(400px, 1fr))',
        memory: 'repeat(auto-fill, minmax(180px, 1fr))'
      },
      backgroundImage: {
        'sidebar-button-close': 'url(/assets/icons/close-sidebar.svg)',
        'sidebar-button-open': 'url(/assets/icons/open-sidebar.svg)',
        
        'play-icon': 'url(https://superlikers-themes.s3.amazonaws.com/ppmu/icon-lesson.svg)',
        'lesson-icon': 'url(https://superlikers-themes.s3.amazonaws.com/ppmu/icon-lessons.svg)',
        'clock-icon': 'url(https://superlikers-themes.s3.amazonaws.com/ppmu/icon-time.svg)',

        'home-icon': 'url(/assets/icons/i-home.svg)',
        'home-icon-active': 'url(/assets/icons/i-home-active.svg)',
        'certificates-icon': 'url(/assets/icons/i-certificates.svg)',
        'certificates-icon-active': 'url(/assets/icons/i-certificates-active.svg)',
        'courses-icon': 'url(/assets/icons/i-courses.svg)',
        'courses-icon-active': 'url(/assets/icons/i-courses-active.svg)',
        'forum-icon': 'url(/assets/icons/i-forum.svg)',
        'forum-icon-active': 'url(/assets/icons/i-forum-active.svg)',
        'levels-icon': 'url(/assets/icons/i-levels.svg)',
        'levels-icon-active': 'url(/assets/icons/i-levels-active.svg)',
        'profile-icon': 'url(/assets/icons/i-profile.svg)',
        'profile-icon-active': 'url(/assets/icons/i-profile-active.svg)',
        'glossary-icon': 'url(/assets/icons/i-glossary.svg)',
        'glossary-icon-active': 'url(/assets/icons/i-glossary-active.svg)',
        'logout-icon': 'url(/assets/icons/i-logout.svg)',
        'logout-icon-active': 'url(/assets/icons/i-logout-active.svg)',
        'search-icon': 'url(/assets/icons/i-search.svg)',
        'play-lesson-icon': 'url(/assets/icons/i-play.svg)',
        'play-lesson-icon-active': 'url(/assets/icons/i-play-active.svg)',
        'green-check-icon': 'url(/assets/icons/i-green-check.svg)',

        'check-icon': 'url(https://superlikers-themes.s3.amazonaws.com/ppmu/check-complete.svg)',
        'open-icon': 'url(https://superlikers-themes.s3.amazonaws.com/ppmu/waiting.svg)',

        'resource-icon': 'url(/assets/icons/resource.svg)',

        'button-icon': 'url(/assets/icons/i-button.svg)',
        'file-icon': 'url(/assets/icons/file.svg)'
      },
      backgroundSize: {
        50: '50%',
        1.2: '1.2rem',
        1.5: '1.5rem',
        16: '4rem'
      },
      maxWidth: {
        '11/12': (11 / 12) * 100
      },
    }
  },
  plugins: [require('@tailwindcss/container-queries')]
}
