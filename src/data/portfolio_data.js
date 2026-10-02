import {
  Code2, Dna, FlaskConical, GitBranch, Microscope, Network, Terminal, BarChart3
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Sandeep Kumar Kumawat",
    title: "M.Tech Researcher in Bioscience & Bioengineering",
    tagline: "Computational Biology · Bioinformatics · Single-Cell Genomics",
    summary:
      "I work at the intersection of biological research and computational analysis, with current research focused on single-cell approaches for Gene × Environment interactions.",
    email: "m25bbe007@iitj.ac.in",
    phone: "+91-8562013985",
    linkedin: "https://www.linkedin.com/in/sandeep-kumar-kumawat-797464345/",
    github: "https://github.com/sandeepkumar-kumawat",
    cv: "/Sandeep_Kumar_Kumawat_CV.pdf",
    photo: "/sandeep-kumar-kumawat.jpg"
  },

  about: {
    bio:
      "I am an M.Tech researcher in Bioscience and Bioengineering at IIT Jodhpur. My work combines computational biology, transcriptomics and biological interpretation, with experience spanning single-cell RNA-seq, bulk RNA-seq, multi-omics analysis and microbiological research.",
    focus: [
      "Single-cell transcriptomics and cell-type-specific analysis",
      "Gene × Environment (GxE) interaction studies",
      "Multi-omics and disease-biology analysis",
      "Reproducible Python/R bioinformatics workflows"
    ]
  },

  skills: [
    {
      category: "Programming & Computing",
      icon: Code2,
      items: ["Python", "R", "Git", "Linux / Ubuntu", "Jupyter", "RStudio"]
    },
    {
      category: "Bioinformatics",
      icon: Dna,
      items: ["scRNA-seq", "Bulk RNA-seq", "Seurat", "GEO", "CIBERSORTx", "GSVA", "limma"]
    },
    {
      category: "Statistics & Data Science",
      icon: BarChart3,
      items: ["pandas", "NumPy", "SciPy", "Matplotlib", "Machine Learning", "ComBat", "Correlation Analysis", "Wilcoxon", "Kruskal–Wallis"]
    },
    {
      category: "Networks & Visualization",
      icon: Network,
      items: ["STRING", "Cytoscape", "ggplot2", "Seurat Visualization", "PPI / Network Analysis"]
    },
    {
      category: "Wet-Lab Experience",
      icon: FlaskConical,
      items: ["Microbial Culture", "Solvent Extraction", "Agar Diffusion", "Antimicrobial Testing", "Microscopy"]
    }
  ],

  education: [
    {
      degree: "M.Tech. — Bioscience & Bioengineering",
      institution: "Indian Institute of Technology, Jodhpur",
      period: "Present",
      details: "CGPA: 7.38 (current)"
    },
    {
      degree: "B.Tech. — Biotechnology",
      institution: "ASPEE SHAKILAM Biotechnology Institute, Navsari Agricultural University, Surat",
      period: "2025",
      details: "CGPA: 8.02"
    },
    {
      degree: "Senior Secondary",
      institution: "Board of Secondary Education, Rajasthan",
      period: "2016",
      details: "79.6%"
    },
    {
      degree: "Secondary",
      institution: "Board of Secondary Education, Rajasthan",
      period: "2014",
      details: "79.0%"
    }
  ],

  experience: [
    {
      title: "M.Tech Thesis Researcher",
      organization: "Indian Institute of Technology, Jodhpur",
      period: "Present",
      description:
        "Single-cell-based approaches for Gene × Environment (GxE) analysis, including QC, preprocessing, clustering, dimensionality reduction, cell-type annotation and downstream interpretation."
    },
    {
      title: "Summer Thesis Research",
      organization: "Indian Institute of Technology, Jodhpur",
      period: "May 2026 – Jul 2026",
      description:
        "Computational analysis of lung fibrosis using three public bulk RNA-seq datasets, ComBat correction, differential expression, PPI/network analysis and pathway enrichment."
    },
    {
      title: "Laboratory Intern",
      organization: "MicroCare Laboratory, Pathology Laboratory",
      period: "Mar 2025 – May 2025",
      description:
        "Performed microbiological and pathological procedures on 500+ clinical samples, including culture/media preparation, handling blood, urine and sputum specimens, microscopy, antimicrobial activity assays and antibiotic susceptibility testing across 20 antibiotics."
    },
    {
      title: "B.Tech. Thesis Research",
      organization: "Navsari Agricultural University, Surat",
      period: "Jul 2024 – Dec 2024",
      description:
        "Prepared Murraya koenigii leaf and Trigonella foenum-graecum seed extracts using methanol, acetone, ethyl acetate and petroleum ether; quantified extractive yield and evaluated antibacterial activity using agar well-diffusion assays."
    }
  ],

  projects: [
    {
      title: "Single-Cell-Based Approaches for GxE Analysis",
      type: "M.Tech Thesis",
      description:
        "Investigating cell-type-specific transcriptional responses associated with Gene × Environment interactions and developing computational workflows for high-dimensional single-cell data.",
      tags: ["scRNA-seq", "Python", "R", "Seurat", "GxE"]
    },
    {
      title: "Computational Analysis of Lung Fibrosis",
      type: "Summer Thesis Research",
      description:
        "Integrated three GEO gene-expression datasets (82 samples across Control, Early and Advanced IPF), applied ComBat batch correction and limma differential expression, and characterized an 11-gene common signature using STRING protein–protein interaction analysis and g:Profiler pathway enrichment.",
      tags: ["Bulk RNA-seq", "ComBat", "limma", "STRING", "Cytoscape"]
    },
    {
      title: "Antibacterial Activity of Plant Extracts",
      type: "B.Tech Thesis",
      description:
        "Evaluated Murraya koenigii leaf and Trigonella foenum-graecum seed extracts prepared with four solvents using agar well-diffusion assays against five bacterial strains.",
      tags: ["Microbiology", "Solvent Extraction", "Agar Diffusion", "Antimicrobial Assay"]
    }
  ],

  publication:
    "Book Chapter: “Solvent Extraction-Based Screening of Murraya koenigii for Antimicrobial Efficacy against Bacterial Pathogens.” Advances in AYUSH, Vol. 17, AkiNik Publications."
};
