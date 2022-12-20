import React ,{ useState }from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './course.css';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFFile from '../../PDFFile/PDFFile';

    const CourseDetails = ({category}) => {
    const{name , total , logo , buy , title } = category;
      

    return (
        <Card className="text-center">
        <h2>{name}</h2>
        <Card.Body>
          
          {/* <Card.Text>
            {total}
          </Card.Text> */}
          <img className='thumbnail' src={logo} alt="" />
        </Card.Body>
        <Card.Footer direction="horizontal" gap={3}  className="text-muted ">
        <Button variant='primary d-inline'>
        <PDFDownloadLink document={<PDFFile />} filename="FORM">
 {({loading}) => (loading ? <Button>Loading Document...</Button> : <Button  >Download PDF</Button> )}
 </PDFDownloadLink>
        </Button>
          
        </Card.Footer>
        <h3>{title}</h3>
        <p>Gain the job-ready skills for an entry-level data analyst role through this Professional Certificate from IBM and position yourself competitively in the thriving job market for data analysts, which will see a 20% growth until 2028 (U.S. Bureau of Labor Statistics)Power your data analyst career by learning the core principles of data analysis and gaining hands-on   skills practice. You’ll work with a variety of data sources, project scenarios, and data analysis   tools, including Excel, SQL, Python, Jupyter Notebooks, and Cognos Analytics, gaining practical   experience with data manipulation and applying analytical techniqueThis Professional Certificate does not require any prior programming or statistical skills, and is   suitable for learners with or without college degrees. All you need to get started is basic computer   literacy, high school math, comfort working with numbers, willingness to learn, and a desire to enrich   your profile with valuable skillUpon successful completion of this program, you’ll have analyzed real-world datasets, created   interactive dashboards, and presented reports to share your findings, giving you the confidence and   the portfolio to begin a career as an associate or junior data analyst. You’ll also build the   foundation for other data disciplines such as data science or data engineerinThis program is ACE® recommended—when you complete, you can earn up to 12 college credits.  </p>
               
        <ButtonGroup vertical className='d-inline  '>
          <Button  variant="primary"><Link className='text-decoration-none text-white d-inline' to='/checkout'>{buy}</Link></Button>
  
          </ButtonGroup>
      </Card>
      

    );
};

export default CourseDetails;