
import { BookOpen, Code, Database, Dna, Globe, Microscope, Server, Terminal } from 'lucide-react';

export const personalDetails = {
    name: "Sandeep Kumar Kumawat",
    tagline: "Biotechnology | Bioinformatics | AI-Driven Drug Discovery",
    about: "I am a Master's student at IIT Jodhpur with a strong foundation in Biotechnology and a passion for applying computational methods to biological problems. My work stands at the intersection of life sciences and artificial intelligence, exploring systems biology, drug discovery, and data-driven healthcare solutions.",
    email: "sandeepkumawat412@gmail.com",
    phone: "8562013985",
    location: "Rajasthan, India",
    links: {
        linkedin: "https://www.linkedin.com/in/sandeep-kumar-kumawat-797464345", // Placeholder
        github: "#",   // Placeholder
        googleScholar: "#" // Placeholder
    }
};

export const education = [
    {
        degree: "Master of Technology (M.Tech)",
        institution: "Indian Institute of Technology (IIT) Jodhpur",
        location: "Jodhpur, Rajasthan",
        year: "Present",
        description: "Specializing in Bioinformatics and Computational Biology. Focusing on AI/ML applications in drug discovery and systems biology.",
    },
    {
        degree: "Bachelor of Technology (B.Tech) in Biotechnology",
        institution: "Navsari Agricultural University",
        location: "Navsari, Gujarat",
        year: "Previous",
        description: "Foundation in biological sciences, genetics, and molecular biology.",
    }
];

export const skills = [
    {
        category: "Bioinformatics & Computational Biology",
        icon: Dna,
        items: ["Sequence Analysis", "Structural Biology", "Molecular Docking", "NGS Data Analysis", "Genomics & Proteomics"]
    },
    {
        category: "AI & Machine Learning",
        icon: Terminal,
        items: ["Deep Learning in Genomics", "Drug Target Prediction", "Scikit-learn", "PyTorch/TensorFlow (Basics)", "Data Visualization"]
    },
    {
        category: "Programming & Tools",
        icon: Code,
        items: ["Python", "R", "SQL", "Linux/Bash", "Git"]
    },
    {
        category: "Life Sciences",
        icon: Microscope,
        items: ["Molecular Biology", "Biochemistry", "Genetics", "Systems Biology"]
    }
];

export const projects = [
    {
        title: "AI-Driven Drug Target Identification",
        description: "Developed a machine learning pipeline to identify potential drug targets for [Specific Disease/Pathogen] by analyzing protein-protein interaction networks.",
        tags: ["Python", "Machine Learning", "Bioinformatics", "Network Analysis"],
        relevance: "Demonstrates application of ML in early-stage drug discovery.",
        outcome: "Identified 3 potential novel targets with high centrality scores."
    },
    {
        title: "Genomic Variant Analysis Pipeline",
        description: "Designed an automated pipeline for processing NGS data to detect single nucleotide polymorphisms (SNPs) associated with specific phenotypic traits.",
        tags: ["Bash", "Nextflow", "GATK", "R"],
        relevance: "High-throughput data analysis automation.",
        outcome: "Reduced manual analysis time by 70%."
    },
    {
        title: "Structural Analysis of Viral Proteins",
        description: "Performed molecular dynamics simulations to understand the stability of viral surface proteins under varying environmental conditions.",
        tags: ["GROMACS", "PyMOL", "Molecular Dynamics"],
        relevance: "Structural biology and biophysics application.",
        outcome: "Provided insights into potential inhibitor binding sites."
    }
];
