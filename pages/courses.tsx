import React from "react"
import Head from "next/head"
import { Column, useTable } from "react-table"

// From: https://github.com/tannerlinsley/react-table/discussions/2664#discussioncomment-92392
interface Class {
  sem: string
  id: string
  name: string
  inst: string
}

const columns: Column<Class>[] = [
  {
    Header: "Semester",
    accessor: "sem",
  },
  {
    Header: "Class ID",
    accessor: "id",
  },
  {
    Header: "Class Name",
    accessor: "name",
  },
  {
    Header: "Instructors",
    accessor: "inst",
  },
]

const data: Array<{ sem: string; id: string; name: string; inst: string }> = [
  {
    sem: "Fall 2018",
    id: "CS 61A",
    name: "Structure of Computer Programs",
    inst: "John DeNero",
  },
  {
    sem: "",
    id: "EE 16A",
    name: "Designing Information Systems I",
    inst: "Gireeja Ranade & Vladimir Stojanovic",
  },
  {
    sem: "",
    id: "Math 53",
    name: "Multivariable Calculus",
    inst: "James Sethian",
  },
  {
    sem: "",
    id: "English R1B",
    name: "Books and Pictures",
    inst: "Jacob Hobson",
  },
  {
    sem: "Spring 2019",
    id: "CS 61B",
    name: "Data Structures and Algorithms",
    inst: "Josh Hug",
  },
  {
    sem: "",
    id: "CS 70",
    name: "Discrete Math and Probability",
    inst: "Satish Rao & Babak Ayazifar",
  },
  {
    sem: "",
    id: "Anthro 2AC",
    name: "Intro to Archaeology",
    inst: "Kent Lightfoot",
  },
  {
    sem: "",
    id: "Africam 112A",
    name: "Political Development in the Third World",
    inst: "Tianna Paschel",
  },
  {
    sem: "",
    id: "CS 195",
    name: "Social Implications of Computing",
    inst: "John DeNero",
  },
  {
    sem: "",
    id: "CS 198-82",
    name: "Machine Learning Decal",
    inst: "ML@B",
  },
  {
    sem: "",
    id: "CS 370",
    name: "Intro to Teaching Computer Science",
    inst: "Christopher Hunn",
  },
  {
    sem: "Summer 2019",
    id: "CS 61C",
    name: "Computer Architecture",
    inst: "Branden Ghena, Morgan Rae Reschenberg & Nick Riasanovsky",
  },
  {
    sem: "Fall 2019",
    id: "EE 16B",
    name: "Designing Information Systems II",
    inst: "Anant Sahai",
  },
  {
    sem: "",
    id: "CS 170",
    name: "Efficient Algorithms and Intractable Problems",
    inst: "Prasad Raghavendra & Satish Rao",
  },
  {
    sem: "",
    id: "EECS 126",
    name: "Probability and Random Processes",
    inst: "Shyam Parekh",
  },
  {
    sem: "",
    id: "CS 198-89",
    name: "Quantum Computing Decal",
    inst: "QCB",
  },
  {
    sem: "",
    id: "CS 198-08",
    name: "Linux SysAdmin Decal",
    inst: "OCF",
  },
  {
    sem: "Summer 2020",
    id: "Physics 137A",
    name: "Quantum Mechanics I",
    inst: "Austin Hedeman",
  },
  {
    sem: "Fall 2020",
    id: "Physics 7B",
    name: "Heat, Electricity, and Magnetism",
    inst: "Alessandra Lanzara",
  },
  {
    sem: "",
    id: "BioEng 103",
    name: "Engineering Molecules II",
    inst: "Gerard Marriott",
  },
  {
    sem: "",
    id: "CS 161",
    name: "Computer Security",
    inst: "Nicholas Weaver",
  },
  {
    sem: "",
    id: "German 160C",
    name: "Politics and Culture in 20th-Century Germany",
    inst: "Isabel Richter",
  },
  {
    sem: "Spring 2021",
    id: "BioEng 104",
    name: "Biological Transport Phenomena",
    inst: "Aaron Streets",
  },
  {
    sem: "",
    id: "CS 162",
    name: "Operating Systems",
    inst: "Anthony Joseph and Natacha Crooks",
  },
  {
    sem: "",
    id: "EECS 127",
    name: "Optimization Models in Engineering",
    inst: "Laurent El Ghaoui",
  },
  {
    sem: "",
    id: "Physics 177",
    name: "Principles of Molecular Biophysics",
    inst: "Ahmet Yildiz",
  },
]

const Courses = (): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Class>({ columns, data })

  return (
    <>
      <Head>
        <title>Courses | Warren Alphonso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Courses</h1>
        <p>
          I study Electrical Engineering and Computer Science at UC Berkeley. Go
          bears!
        </p>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={`Header group ${i}`}
              >
                {headerGroup.headers.map((column, j) => (
                  <th
                    {...column.getHeaderProps()}
                    key={`Header ${i} ${j}`}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={`Row ${i}`}>
                  {row.cells.map((cell, j) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={`Item ${i} ${j}`}
                        style={{
                          padding: "10px",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Courses
