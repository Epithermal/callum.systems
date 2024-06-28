import lgnrp from '/public/image/lgnrp.jpg';
import financeapp from '/public/image/financeapp.png';
import sms4usa from '/public/image/image_2024-06-28_195839356.png';

export const projectsData = [
    {
        id: 1,
        name: 'London Gaming Network',
        description: "'I, along with two other founders, created and managed the London Gaming Network, a FiveM server that attracted over 50 players. I was responsible for developing and maintaining various server-side scripts and managing the server infrastructure. Key technologies used included Lua for scripting, JavaScript for ui and other things, and both Windows Server and Ubuntu for server management. We also utilized ESXi for virtualization.'",
        tools: ['Lua', 'JavaScript', 'Windows Server', 'Ubuntu', 'ESXi'],
        tags: ['Gaming', 'Network', 'Server'],
        role: "'Founder & Lead Developer'",
        code: '',
        demo: 'discord.gg/lgnrp',
        image: lgnrp,
    },
    {
        id: 2,
        name: 'Personal Finance Tracker',
        description: "'The Personal Finance Tracker is a web application designed to help users manage their finances by tracking income, expenses, and generating detailed financial reports. This project showcases a full-stack web development approach, integrating frontend, backend, and database technologies. The application features user authentication, category management, transaction tracking, and report generation with data visualization.'",
        tools: ['Express.js', 'EJS', 'Tailwind CSS', 'Socket.io', 'MongoDB', 'Chart.js'],
        tags: ['Finance', 'Web App', 'Tracker'],
        role: "'Creator'",
        code: 'https://github.com/epithermal/personal-finance-tracker',
        demo: '',  // Replace with actual demo URL
        image: financeapp,
    },
    {
        id: 3,
        name: 'SMS 4 USA',
        description: "'SMS 4 USA is a web application designed to provide SMS services across various countries. As the Development Director, I oversee the entire development process, ensuring the seamless integration of multiple technologies and APIs. This project leverages a range of tools and technologies, including MySQL, smspool API, Sellix API, Bootstrap, NobleUI, SMTP, and more to deliver robust and scalable solutions.'",
        tools: ['MySQL', 'smspool API', 'Sellix API', 'Bootstrap', 'NobleUI', 'SMTP'],
        tags: ['SMS', 'Web App', 'Service'],
        role: "'Development Director'",
        code: '',  // Replace with actual GitHub URL if available
        demo: 'https://sms4usa.com',
        image: sms4usa,
    }
];
