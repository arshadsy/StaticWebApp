export function CoverLetter() {
    return (
        < div className="cover-letter row m-4" >
            <div className="col-lg-2"></div>
            <div id="leftPane" className="col-md-3 col-lg-2 card">
                <h1 className="highlight head">Arshad Syed</h1>
                <div className="bg-success-subtle card card-body">
                    Application Developer<br />
                    Bengaluru, India
                </div>
                <hr />
                <div className="card card-body overflow-scroll">
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
                </div>
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
        </div >

    )
}