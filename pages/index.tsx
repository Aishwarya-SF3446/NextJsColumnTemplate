'use client'
import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page, Sort, Filter, Group
} from '@syncfusion/ej2-react-grids';
import { hierarchyOrderdata } from "./datasource";
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

export default function Home() {
  function gridTemplate(props: any) {
    return (<CheckBoxComponent checked={props.Verified}></CheckBoxComponent>);
}
function dateTemplate(props: any) {
    return (<DateTimePickerComponent value={props.OrderDate}></DateTimePickerComponent>);
}
const template = gridTemplate;
const filterSettings = { type: 'Excel' };
return (<div className='control-pane'>
        <div className='control-section'>
            <GridComponent dataSource={hierarchyOrderdata} width='auto' height='359' allowSorting={true} statelessTemplates={['directiveTemplates']}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer Name' width='150'></ColumnDirective>
                    <ColumnDirective headerText='Verified' width='180' template={template} textAlign='Center'/>
                    <ColumnDirective field='OrderDate' template={dateTemplate} headerText='Order Date' width='130' format='yMd' textAlign='Right'/>
                    <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'/>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Sort, Filter]}/>
            </GridComponent>
        </div>
    </div>);
}