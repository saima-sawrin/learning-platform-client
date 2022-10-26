import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src='pdf.jpg' />
        <Text style={styles.text}>
        Gain the job-ready skills for an entry-level data analyst role through this Professional Certificate from IBM and position yourself competitively in the thriving job market for data analysts, which will see a 20% growth until 2028 (U.S. Bureau of Labor Statistics)Power your data analyst career by learning the core principles of data analysis and gaining hands-on   skills practice. You’ll work with a variety of data sources, project scenarios, and data analysis   tools, including Excel, SQL, Python, Jupyter Notebooks, and Cognos Analytics, gaining practical   experience with data manipulation and applying analytical techniqueThis Professional Certificate does not require any prior programming or statistical skills, and is   suitable for learners with or without college degrees. All you need to get started is basic computer   literacy, high school math, comfort working with numbers, willingness to learn, and a desire to enrich   your profile with valuable skillUpon successful completion of this program, you’ll have analyzed real-world datasets, created   interactive dashboards, and presented reports to share your findings, giving you the confidence and   the portfolio to begin a career as an associate or junior data analyst. You’ll also build the   foundation for other data disciplines such as data science or data engineering This program is ACE® recommended—when you complete, you can earn up to 12 college credits.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;