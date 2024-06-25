import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bgImg"></div>
      <div className="cover-letter row m-4">
        <div className="col-lg-2"></div>
        <div id="leftPane" className="col-md-3 col-lg-2 card">
          <h1 className="highlight head">Arshad Syed</h1>
          <span className="bg-success-subtle card card-body">
            Application Developer<br />
            Bengaluru, India
          </span>
          <hr />
          <span className="card card-body">
            <table>
              <tbody>
                <tr>
                  <td>Mobile</td>
                  <td>:</td>
                  <td>+91-9901030290</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>
                    <a
                      href="mailto:&#115;&#121;&#097;&#114;&#115;&#104;&#097;&#100;&#064;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#046;&#099;&#111;&#109;"
                    >
                      &#115;&#121;&#097;&#114;&#115;&#104;&#097;&#100;&#064;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#046;&#099;&#111;&#109;
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>GitHub</td>
                  <td>:</td>
                  <td>
                    <a
                      href="&#104;&#116;&#116;&#112;&#115;://&#103;&#105;&#116;&#104;&#117;&#098;&#046;&#099;&#111;&#109;/&#097;&#114;&#115;&#104;&#097;&#100;&#115;&#121;"
                    >
                      &#104;&#116;&#116;&#112;&#115;://&#103;&#105;&#116;&#104;&#117;&#098;&#046;&#099;&#111;&#109;/&#097;&#114;&#115;&#104;&#097;&#100;&#115;&#121;
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Linkedin</td>
                  <td>:</td>
                  <td>
                    <a
                      href="&#104;&#116;&#116;&#112;&#115;://&#119;&#119;&#119;&#046;&#108;&#105;&#110;&#107;&#101;&#100;&#105;&#110;&#046;&#099;&#111;&#109;/&#105;&#110;/&#097;&#114;&#115;&#104;&#097;&#100;&#045;&#115;&#121;&#101;&#100;"
                    >
                      &#104;&#116;&#116;&#112;&#115;://&#119;&#119;&#119;&#046;&#108;&#105;&#110;&#107;&#101;&#100;&#105;&#110;&#046;&#099;&#111;&#109;/&#105;&#110;/&#097;&#114;&#115;&#104;&#097;&#100;&#045;&#115;&#121;&#101;&#100;
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
          <div className="card card-vspace">
            <h4 className="card-header p-xl-0">Education</h4>
            <ul className="card-body">
              <li>
                MSc, Information Technology, Vellore Institute of Technologies,
                IN, 2018
              </li>
              <li>BCA, Computer Applications, Bangalore, IN, 2013</li>
            </ul>
          </div>
          <div className="card card-vspace">
            <h4 className="card-header">Languages</h4>
            <p className="card-body">
              English - Fluent<br />
              Kannada - Good<br />
              Hindi - Very Good<br />
              Urdu - Good
            </p>
          </div>
        </div>
        <div className="rightPane col-md-9 col-lg-5 card">
          <h2 className='app-topic-head'>Motivation</h2>
          <p>
            Software Developer with 10 years of work experience looking for
            opportunities in an organization that has passion to grow in harmony
            with the ecosystem and the society to provide best products and
            services to our customer.
          </p>
          <h2 className='app-topic-head'>Key Skills</h2>
          <p>
            OOPs, SOLID principles, C#, dotnet core MVC, .net core API, Docker,
            Containers, Kubernetis, javascript, ReactJS, Test Driven Development,
            Pair Programming, Sonar Cube, XUnit.
          </p>
          <h2 className='app-topic-head'>Work Experience</h2>
          <h4 className='app-topic-head'>Application Developer</h4>
          <p>
            IBM, India | Sep 2021 - Present<br />

            As a senior developer I am responsible for coordinating with Business
            Analysts to understand the requirement and, design and develop
            solution for the given problem. I have worked with sprint based
            workflow. My technology stack includes dotnet core, c#, React.js, SQL,
            Entity Framework , node.js, Test Driven Development, Pair Programming
          </p>
          <h4 className='app-topic-head'>Senior Software Specialist</h4>
          <p>
            Accenture Technologies, India | May 2019 - Sep 2021<br />

            I was in charge of designing, developing and deploying .net API and
            console applications for Docker and Kubernetis using Azure Devops,
            Test Driven Development, Pair Programming.
          </p>
          <h4 className='app-topic-head'>Senior Developer</h4>
          <p>
            Wipro Limited, India | Mar 2014 - May 2019<br />

            I was in charge of monitoring and support activities in early stages.
            Followed by Development of MVC application in Ruby on Rails and ASPNET
          </p>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <div className="summary row m-4">
        <div className="col-lg-2"></div>
        <div className="col-md-12 col-lg-7">
          <h3 className="card app-topic-head card-header fs-4">Summary</h3>
          <ul className="list-group">
            <li className="list-group-item">
              8 years of experience in C#, 2 years in .NET MVC 4 and 5, and 3 years
              experience in WebApi
            </li>
            <li className="list-group-item">
              Worked with Front end Technologies like .net Blazor and reactJS
            </li>
            <li className="list-group-item">
              Experience in Dockers and Containerization
            </li>
            <li className="list-group-item">
              Experienced in Test Driven Development(TDD), Data Driven
              Development, Paired Programming.
            </li>
            <li className="list-group-item">Experience in Kubernetis deployment.</li>
            <li className="list-group-item">
              Possess working knowledge in C# Oops concept.
            </li>
            <li className="list-group-item">Understands threading concepts.</li>
            <li className="list-group-item">
              Understanding of Conventional and Attribute Based routing
              techniques.
            </li>
            <li className="list-group-item">
              Exposure to Code first development and Data First Develpoment.
            </li>
            <li className="list-group-item">
              Familiar with Entity Framework and LINQ and lambda expressions.
            </li>
            <li className="list-group-item">
              Exposure to Client Side scripts such as jQuery and JavaScript
            </li>
            <li className="list-group-item">
              Having 5 years of experience in Database Systems: MS Sql Server and
              Oracle.
            </li>
            <li className="list-group-item">
              Working knowledge on creation of database objects such as Tables,
              Views, Procedures, Functions and Oracle Packages.
            </li>
            <li className="list-group-item">
              Familiar with basic Query Optimizations.
            </li>
            <li className="list-group-item">
              Experienced in writing complex SQL queries.
            </li>
            <li className="list-group-item">
              Worked with Oracle collections objects and performance improvement
              of Oracle PLSQL.
            </li>
          </ul>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <div className="project-profile row m-4">
        <div className="col-lg-2"></div>
        <div className="col-lg-7 col-md-12">
          <p className="card card-header app-topic-head fs-5">Project Profile</p>
          <ul className="list-group">
            <li className="list-group-item card">
              <h4
                className="fs-5 card-header"
                style={{ color: '#4a71e6', textDecoration: 'underline' }}
              >
                IBM
              </h4>
              <table className="table app-table-row-border card-body">
                <tr>
                  <th className="col-2">Project Domain</th>
                  <td>Manufacturing</td>
                </tr>
                <tr>
                  <th>Technologies Involved</th>
                  <td>
                    dotnet Core, WebAPI, MVC, C#, SQL Server, Profisee Tool,
                    ReactJS, Pair Programming, Sonar Cube, XUnit
                  </td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>
                    The project is dedicated to providing automation solutions to
                    its customers globally
                  </td>
                </tr>
                <tr>
                  <th>Responsibility</th>
                  <td>
                    Senior Developer:<br />
                    <ul className="list-group">
                      <li className="list-group-item">
                        As a senior developer, I am tasked with resolving
                        production issues and ensure data integrity.
                      </li>
                      <li className="list-group-item">
                        I am also responsible to analyze the existing code and
                        optimize the structure to help improve performance and
                        code reusability as well as maintainability.
                      </li>
                      <li className="list-group-item">
                        Provide daily updates regarding the progress to my lead
                        and Managers.
                      </li>
                      <li className="list-group-item">
                        Test Driven Development, Pair Programming
                      </li>
                    </ul>
                    Minor Standard Tasks:
                    <ul className="list-group">
                      <li className="list-group-item">Code deployment.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Team Size</th>
                  <td>5</td>
                </tr>
              </table>
            </li>
            <li className="list-group-item card">
              <h4
                className="fs-5 card-header"
                style={{ color: '#8c4cba', textDecoration: 'underline' }}
              >
                Accenture
              </h4>
              <table className="table card-body app-table-row-border">
                <tr>
                  <th className="col-2">Project Domain</th>
                  <td>Integration Project/Data and Automation Tool</td>
                </tr>
                <tr>
                  <th>Technologies Involved</th>
                  <td>
                    dotnet Core, MVC, WebAPI, ReactJS. MongoDB, Sql Server,
                    Docker, Kubernetis
                  </td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>
                    Integration Project is a proof of concept project developed
                    for in-house usability, the objective is to provide the whole
                    of Accenture internal projects with a centralized and robust
                    system to perform routine tasks from one location
                  </td>
                </tr>
                <tr>
                  <th>Responsibility</th>
                  <td>
                    Senior Developer:<br />
                    <ul className="list-group">
                      <li className="list-group-item">
                        As a senior developer, I am tasked with analyzing
                        requirements, designing a solution and implementing the
                        solution.
                      </li>
                      <li className="list-group-item">
                        I am also responsible to analyze the existing code and
                        optimize the structure to help improve performance and
                        code reusability as well as maintainability.
                      </li>
                      <li className="list-group-item">
                        Provide daily updates regarding the progress to my lead
                        and Managers.
                      </li>
                      <li className="list-group-item">
                        Develop the solution and conduct Unit Testing.
                      </li>
                      <li className="list-group-item">
                        Provide guidance to peers and new comers.
                      </li>
                    </ul>
                    Minor Standard Tasks:
                    <ul className="list-group">
                      <li className="list-group-item">
                        Code deployment in cases where deployment team is not
                        available.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Team Size</th>
                  <td>17</td>
                </tr>
              </table>
            </li>
            <li className="list-group-item card">
              <h4
                className="fs-5 card-header"
                style={{ color: '#4a71e6', textDecoration: 'underline' }}
              >
                Wipro
              </h4>
              <table className="table card-body app-table-row-border">
                <tr>
                  <th className="col-2">Project Domain</th>
                  <td>Employee Self Service Application - HRIT</td>
                </tr>
                <tr>
                  <th>Technologies Involved</th>
                  <td>
                    PL/SQL, Oracle Web Forms(web package), ASP.NET MVC5 (C#)
                  </td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>
                    This project is about providing Technical and Functional
                    solution to client regarding enhancements and applying fixes
                    to the Application by working with various teams like Design,
                    Architect and QA. and providing the correct resolution within
                    SLA.
                  </td>
                </tr>
                <tr>
                  <th>Responsibility</th>
                  <td>
                    Developer:<br />
                    <ul className="list-group">
                      <li className="list-group-item">
                        • As a developer, it is my responsibility that all tasks
                        assigned to me transition through each stage of
                        Development in a seamless manner and I am also responsible
                        to monitor and facilitate other teams to test and deploy
                        changes into Test and Production environments.
                      </li>
                      <li className="list-group-item">
                        Responsible for understanding customer requirements,
                        analyzing possible solutions and discussing best approach
                        which would enhance customer experience.
                      </li>
                      <li className="list-group-item">
                        Discuss the approach with Architect Team and Design Team.
                      </li>
                      <li className="list-group-item">
                        Develop the solution and conduct Unit Testing.
                      </li>
                      <li className="list-group-item">
                        Provide assistance to QA team.
                      </li>
                      <li className="list-group-item">
                        Interact with migrations teams.
                      </li>
                    </ul>
                    Minor Standard Tasks:
                    <ul className="list-group">
                      <li className="list-group-item">
                        Follow through standard procedure wherever available when
                        fixing minor data related ussies in Production
                        Environment.
                      </li>
                      <li className="list-group-item">
                        In case standard procedure does not exist, analyze the
                        task, document it and proceed to fix post approval of
                        proposed standard work.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Team Size</th>
                  <td>15</td>
                </tr>
              </table>
              <hr></hr>
              <table className="table card-body app-table-row-border">
                <tr>
                  <th className="col-2">Project Domain</th>
                  <td>Energy and Utilities</td>
                </tr>
                <tr>
                  <th>Technologies Involved</th>
                  <td>SQL Server, Ruby on Rails</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>
                    An Energy and Utilities based project providing services in
                    Australian market
                  </td>
                </tr>
                <tr>
                  <th>Responsibility</th>
                  <td>
                    Support and Maintainance L1:SQL Server<br />
                    <ul className="list-group">
                      <li className="list-group-item">
                        As a support executive, it was my responsibility to handle
                        all Service Requests and raise Change requests.
                      </li>
                      <li className="list-group-item">
                        Monitor tasks and provide daily updates to clients
                        regarding task status, failures, and fixes applied.
                      </li>
                    </ul>
                    Minor Standard Tasks:
                    <ul className="list-group">
                      <li className="list-group-item">
                        Create new subroutines to get customized reports based on
                        client requirements through SSIS.
                      </li>
                      <li className="list-group-item">
                        Provide standard daily reports to client.
                      </li>
                    </ul>
                    Development L2: Ruby on Rails
                    <ul className="list-group">
                      <li className="list-group-item">
                        Development and Maintenance of an In-house application the
                        client uses to automate the Billing Process toward its
                        vendors.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Team Size</th>
                  <td>2</td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
        <div className="col-lg-3"></div>

      </div>
    </div>
  );
}

export default App;
