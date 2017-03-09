import { AfterViewInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, ViewChild, Type } from '@angular/core';
import {ImageCropperComponent} from '../src/imageCropperComponent';
import {CropperSettings} from '../src/cropperSettings';
import {Bounds} from '../src/model/bounds';
import {CropPosition} from '../src/model/cropPosition';

@Component({
    selector: 'test-app',
    template: `
<div class="page-header">
  <h1>angular2-img-cropper <small>samples</small>   <button class="btn btn-primary" (click)="resetCroppers()">Reset</button></h1>
</div>
<tabset [pills]="false" >
    <tab title="Sample 1" [disabled]="false">
        <div class="row">
        <div class="col-md-9">
            <h3>source</h3>
            <img-cropper #cropper1 [image]="data1" [settings]="cropperSettings1"></img-cropper>
        </div>
        <h3>result</h3>
        <div class="col-md-3">
            <span *ngIf="data1.image" >
                <img [src]="data1.image"
                    [width]="cropperSettings1.croppedWidth"
                    [height]="cropperSettings1.croppedHeight">
            </span>
        </div>
        </div>
<h3>settings</h3>
<pre>
<code>
this.cropperSettings1 = new CropperSettings();
this.cropperSettings1.width = 200;
this.cropperSettings1.height = 200;

this.cropperSettings1.croppedWidth = 200;
this.cropperSettings1.croppedHeight = 200;

this.cropperSettings1.canvasWidth = 500;
this.cropperSettings1.canvasHeight = 300;

this.cropperSettings1.minWidth = 100;
this.cropperSettings1.minHeight = 100;

this.cropperSettings1.rounded = false;

this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;
</code>
</pre>
    </tab>
    <tab title="Sample 2" [disabled]="false">
        <div class="row">
        <div class="col-md-9">
            <h3>source</h3>
            <img-cropper #cropper2 [image]="data2" [settings]="cropperSettings2"></img-cropper>
            <div>
                <label class="btn btn-primary">
                    Upload
                    <input id="file_input_file" class="none" type="file" style="display: none;"
                    (change)="onChange($event)"/>
                </label>
            </div>
        </div>
        <h3>result</h3>
        <div class="col-md-3">
            <span *ngIf="data2.image" >
              <img [src]="data2.image" [width]="cropperSettings2.croppedWidth" [height]="cropperSettings2.croppedHeight" style="border-radius: 100px">
            </span>
        </div>
        </div>
<h3>settings</h3>
<pre>
<code>
this.cropperSettings2 = new CropperSettings();
this.cropperSettings2.width = 200;
this.cropperSettings2.height = 200;
this.cropperSettings2.keepAspect = false;

this.cropperSettings2.croppedWidth = 200;
this.cropperSettings2.croppedHeight = 200;

this.cropperSettings2.canvasWidth = 500;
this.cropperSettings2.canvasHeight = 300;

this.cropperSettings2.minWidth = 100;
this.cropperSettings2.minHeight = 100;

this.cropperSettings2.rounded = true;
this.cropperSettings2.minWithRelativeToResolution = false;

this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
this.cropperSettings2.noFileInput = true;
</code>
</pre>
    </tab>

    <tab title="Crop position" [disabled]="false">
        <div class="row">
        <div class="col-md-9">
            <h3>source</h3>
            <img-cropper #cropper3 [image]="data3" [settings]="cropperSettings3" [(cropPosition)]="cropPosition"></img-cropper>
        <br/>
        Crop position:
        <br/>
        X <input type="text" [(ngModel)]="cropPosition.x">
        Y <input type="text" [(ngModel)]="cropPosition.y">
        W <input type="text" [(ngModel)]="cropPosition.w">
        H <input type="text" [(ngModel)]="cropPosition.h">
        <label class="btn btn-primary" (click)="updateCropPosition()">
            update
        </label>
        </div>
        <h3>result</h3>
        <div class="col-md-3">
            <span *ngIf="data3.image" >
              <img [src]="data3.image" [width]="cropperSettings3.croppedWidth" [height]="cropperSettings3.croppedHeight">
            </span>
        </div>
        </div>
<h3>settings</h3>
<pre>
<code>
this.cropperSettings3 = new CropperSettings();
this.cropperSettings3.width = 200;
this.cropperSettings3.height = 250;
this.cropperSettings3.keepAspect = true;

this.cropperSettings3.croppedWidth = 200;
this.cropperSettings3.croppedHeight = 250;

this.cropperSettings3.canvasWidth = 500;
this.cropperSettings3.canvasHeight = 300;

this.cropperSettings3.minWidth = 100;
this.cropperSettings3.minHeight = 100;

this.cropperSettings3.rounded = false;
this.cropperSettings3.minWithRelativeToResolution = false;

this.cropperSettings3.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings3.cropperDrawSettings.strokeWidth = 2;

this.cropPosition = new CropPosition();
this.cropPosition.x = 10;
this.cropPosition.y = 10;
this.cropPosition.w = 200;
this.cropPosition.h = 250;
</code>
</pre>
</tab>    
</tabset>
    `
})
export class AppComponent extends Type {

    //Cropper 1 data
    public data1:any;
    public cropperSettings1:CropperSettings;

    //Cropper 2 data
    public data2:any;
    public cropperSettings2:CropperSettings;

    @ViewChild('cropper1', undefined)
    public cropper1:ImageCropperComponent;

    @ViewChild('cropper2', undefined)
    public cropper2:ImageCropperComponent;

    @ViewChild('cropper3', undefined)
    public cropper3:ImageCropperComponent;

    public onChange:Function;
    public updateCropPosition:Function;
    public resetCroppers:Function;

    //Cropper 3 data
    public data3:any;
    public cropperSettings3:CropperSettings;
    public cropPosition:CropPosition;


    constructor() {
        super();

        this.cropperSettings1 = new CropperSettings();
        this.cropperSettings1.dynamicSizing = true;
        this.cropperSettings1.cropperClass = 'custom-class';
        this.cropperSettings1.width = 200;
        this.cropperSettings1.height = 200;

        this.cropperSettings1.croppedWidth = 200;
        this.cropperSettings1.croppedHeight = 200;

        this.cropperSettings1.canvasWidth = 500;
        this.cropperSettings1.canvasHeight = 300;

        this.cropperSettings1.minWidth = 100;
        this.cropperSettings1.minHeight = 100;

        this.cropperSettings1.rounded = false;

        this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

        this.cropperSettings1.keepAspect = true;
        this.cropperSettings1.preserveSize = false;

        this.data1 = {};

        //Cropper settings 2
        this.cropperSettings2 = new CropperSettings();
        this.cropperSettings2.width = 200;
        this.cropperSettings2.height = 200;
        this.cropperSettings2.keepAspect = false;

        this.cropperSettings2.croppedWidth = 200;
        this.cropperSettings2.croppedHeight = 200;

        this.cropperSettings2.canvasWidth = 500;
        this.cropperSettings2.canvasHeight = 300;

        this.cropperSettings2.minWidth = 100;
        this.cropperSettings2.minHeight = 100;

        this.cropperSettings2.rounded = true;
        this.cropperSettings2.minWithRelativeToResolution = false;

        this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings2.noFileInput = true;

        this.data2 = {};

        //Cropper settings 3
        this.cropperSettings3 = new CropperSettings();
        this.cropperSettings3.width = 200;
        this.cropperSettings3.height = 250;
        this.cropperSettings3.keepAspect = true;

        this.cropperSettings3.croppedWidth = 200;
        this.cropperSettings3.croppedHeight = 250;

        this.cropperSettings3.canvasWidth = 500;
        this.cropperSettings3.canvasHeight = 300;

        this.cropperSettings3.minWidth = 100;
        this.cropperSettings3.minHeight = 100;

        this.cropperSettings3.rounded = false;
        this.cropperSettings3.minWithRelativeToResolution = false;

        this.cropperSettings3.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings3.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings3.noFileInput = false;

        this.cropPosition = new CropPosition();
        this.cropPosition.x = 10;
        this.cropPosition.y = 10;
        this.cropPosition.w = 200;
        this.cropPosition.h = 250;

        this.data3 = {};

        this.onChange = ($event:any) => {
            var image:any = new Image();
            var file:File = $event.target.files[0];
            var myReader:FileReader = new FileReader();
            myReader.addEventListener('loadend', (loadEvent:any) => {
                image.src = loadEvent.target.result;
                this.cropper2.setImage(image);
            });

            myReader.readAsDataURL(file);
        }

        this.updateCropPosition = () => {
            this.cropPosition = new CropPosition(this.cropPosition.x, this.cropPosition.y, this.cropPosition.w, this.cropPosition.h);
        }

        this.resetCroppers = () => {
            this.cropper1.reset();
            this.cropper2.reset();
            this.cropper3.reset();
        }


    }



}
