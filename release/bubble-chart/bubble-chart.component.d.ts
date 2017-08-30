import { EventEmitter, TemplateRef } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
export declare class BubbleChartComponent extends BaseChartComponent {
    showGridLines: boolean;
    legend: boolean;
    legendTitle: string;
    xAxis: boolean;
    yAxis: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    roundDomains: boolean;
    maxRadius: number;
    minRadius: number;
    autoScale: boolean;
    schemeType: string;
    legendPosition: string;
    tooltipDisabled: boolean;
    xAxisMinScale: any;
    yAxisMinScale: any;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    colors: ColorHelper;
    scaleType: string;
    margin: number[];
    bubblePadding: number[];
    data: any;
    legendOptions: any;
    transform: string;
    seriesDomain: any[];
    xDomain: any[];
    yDomain: any[];
    rDomain: number[];
    xScaleType: string;
    yScaleType: string;
    yScale: any;
    xScale: any;
    rScale: any;
    xAxisHeight: number;
    yAxisWidth: number;
    activeEntries: any[];
    update(): void;
    hideCircles(): void;
    onClick(data: any, series?: any): void;
    getBubblePadding(): number[];
    setScales(): void;
    getYScale(domain: any, height: any): any;
    getXScale(domain: any, width: any): any;
    getRScale(domain: any, range: any): any;
    getLegendOptions(): any;
    getXDomain(): any[];
    getYDomain(): any[];
    getRDomain(): number[];
    updateYAxisWidth({width}: {
        width: any;
    }): void;
    updateXAxisHeight({height}: {
        height: any;
    }): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    deactivateAll(): void;
    trackBy(index: any, item: any): string;
}
