import React from 'react'
import { Table } from 'semantic-ui-react'

const DashboardTable = () => (
  <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Issue Type</Table.HeaderCell>
        <Table.HeaderCell>Priority</Table.HeaderCell>
        <Table.HeaderCell>Project</Table.HeaderCell>
        <Table.HeaderCell>Date Created</Table.HeaderCell>
        <Table.HeaderCell>Estimated TOC</Table.HeaderCell>
        <Table.HeaderCell>Assignee</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>


{/* MAP THROUGH DATA, PRINT {} WHERE 'INSERT DATA' */}
    <Table.Body>
      <Table.Row>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell>INSERT DATA</Table.Cell>
        <Table.Cell textAlign='right'>INSERT DATA</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default DashboardTable;