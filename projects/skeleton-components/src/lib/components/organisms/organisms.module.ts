// Copyright (c) 2024 Skeleton-components. All Rights Reserved.

import { AtomsModule } from '../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule, AtomsModule, MoleculesModule],
    exports: [],
})
export class OrganismsModule {}
