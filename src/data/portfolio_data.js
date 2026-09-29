export const portfolioData = {
  hero: {
    name: "Sandeep Kumar Kumawat",
    title: "M.Tech Researcher in Bioscience and Bioengineering",
    summary: "M.Tech researcher at IIT Jodhpur specializing in single-cell RNA-seq, bulk RNA-seq analysis, and multi-omics data integration. Passionate about translating high-dimensional transcriptomic data into biologically interpretable insights."
  },
  about: {
    bio: "I am currently pursuing my M.Tech at the Indian Institute of Technology, Jodhpur. My research focuses on computational biology, specifically Gene x Environment (GxE) interaction studies, multi-omics integration, and disease biomarker discovery.",
    interests: ["Single-Cell Genomics", "Computational Biology", "Gene x Environment (GxE) Analysis", "Multi-omics", "Disease Biology"]
  },
  skills: [
    { category: "Programming & Tools", items: ["Python", "R", "Git", "Linux/Ubuntu", "Jupyter Notebook", "RStudio"] },
    { category: "Bioinformatics", items: ["scRNA-seq", "Bulk RNA-seq", "Seurat", "CIBERSORTX", "GSVA", "STRING", "Cytoscape"] },
    { category: "Data Science", items: ["pandas", "NumPy", "SciPy", "Matplotlib", "Machine Learning", "ComBat Batch Correction"] },
    { category: "Wet Lab Skills", items: ["Microbiology Culture", "Solvent Extraction", "Antimicrobial Assays"] }
  ],
  education: [
    {
      degree: "M.Tech. (Bioscience & Bioengineering)",
      institution: "Indian Institute of Technology, Jodhpur",
      year: "Present",
      details: "CGPA: 7.38 (Current)"
    },
    {
      degree: "B.Tech. (Biotechnology)",
      institution: "ASPEE SHAKILAM Biotechnology Institute, NAU, Surat",
      year: "2025",
      details: "CGPA: 8.02"
    }
  ],
  projects: [
    {
      title: "Single-Cell-Based Approaches for Gene x Environment (GxE) Analysis",
      role: "M.Tech Thesis",
      description: "Investigating cell-type-specific transcriptional responses associated with gene-environment interactions. Developing end-to-end scRNA-seq workflows including QC, preprocessing, clustering, and downstream analysis.",
      techStack: ["scRNA-seq", "Python", "R", "Seurat"]
    },
    {
      title: "Integrated Omics Analysis of IPF",
      role: "Summer Thesis Research",
      description: "Integrated and batch-corrected three public bulk RNA-seq datasets (GSE110147, GSE24206, GSE99621) using ComBat. Derived an 11-gene common DEG signature and characterized it via STRING and pathway enrichment analysis.",
      techStack: ["Bulk RNA-seq", "limma", "ComBat", "STRING", "Cytoscape"]
    },
    {
      title: "Antibacterial Activity of Plant Extracts",
      role: "B.Tech Thesis",
      description: "Evaluated the antibacterial efficacy of Murraya koenigii and Trigonella foenum-graecum extracts against multiple pathogenic bacteria using various solvent extraction methods and agar diffusion assays.",
      techStack: ["Microbiology", "Solvent Extraction", "Agar Diffusion Assay"]
    }
  ]
};