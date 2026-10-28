import {
  Code2, Dna, FlaskConical, GitBranch, Microscope, Network, Terminal, BarChart3
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Sandeep Kumar Kumawat",
    title: "M.Tech Researcher in Bioscience & Bioengineering",
    tagline: "Computational Biology · Bioinformatics · Single-Cell Genomics",
    summary:
      "My current M.Tech research explores computational approaches to single-cell data analysis for studying Gene × Environment (G×E) interactions. I am interested in cell-type-specific transcriptional responses, transcriptomic data integration, and reproducible workflows that connect high-dimensional molecular data with biological questions.",
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
    items: [
      "Python",
      "R",
      "Git",
      "Linux / Ubuntu",
      "Jupyter",
      "RStudio"
    ]
  },
  {
    category: "Single-Cell & Transcriptomics",
    icon: Dna,
    items: [
      "scRNA-seq",
      "Bulk RNA-seq",
      "Seurat",
      "GEO Data",
      "CIBERSORTx",
      "GSVA",
      "limma"
    ]
  },
  {
    category: "Statistics & Data Analysis",
    icon: BarChart3,
    items: [
      "pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "ComBat Batch Correction",
      "Differential Expression Analysis",
      "Correlation Analysis",
      "Wilcoxon Test",
      "Kruskal–Wallis Test"
    ]
  },
  {
    category: "Networks & Visualization",
    icon: Network,
    items: [
      "STRING",
      "Cytoscape",
      "ggplot2",
      "Seurat Visualization",
      "Protein–Protein Interaction Networks",
      "Pathway Enrichment Analysis"
    ]
  },
  {
    category: "Experimental Biosciences",
    icon: FlaskConical,
    items: [
      "Microbial Culture",
      "Solvent Extraction",
      "Agar Diffusion",
      "Antimicrobial Testing",
      "Microscopy"
    ]
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
      type: "M.Tech Thesis · Ongoing",
      description:
         "Developing computational workflows to investigate cell-type-specific transcriptional patterns relevant to Gene × Environment (G×E) interactions. The research focuses on single-cell data preprocessing, quality control, cell-type-aware analysis, and quantitative evaluation of the analytical workflow.",
      tags: ["scRNA-seq", "Python", "R", "Seurat", "G×E"]
    },
    {
      title: "Computational Analysis of Lung Fibrosis",
      type: "Summer Thesis Research",
      description:
        "Integrated three GEO gene-expression cohorts comprising 82 samples across Control, Early and Advanced idiopathic pulmonary fibrosis (IPF). Applied ComBat batch correction and limma differential-expression analysis, then investigated shared gene signatures using STRING protein–protein interaction networks and g:Profiler pathway enrichment.",
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
