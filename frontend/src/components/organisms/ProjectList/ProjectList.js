import React, { useState } from "react";
import './ProjectList.scss';
import ProjectListItem from "../../atoms/ProjectListItem/ProjectListItem";

import LinkButton from "../../molecules/LinkButton/LinkButton";


export default function ProjectList() {
  return (
    <div className="project-list">
      <div className="project-list__overview">
        <h2 className="project-list__title">プロジェクトを選択</h2>
        <LinkButton className="project-list__link-button" label="プロジェクトを追加" />
      </div>
      <div className="project-list__items-container">
        <div className="project-list__items">
          <ProjectListItem state='normal' label='ひとつめ' handleClick={() => console.log('a')} />
          <ProjectListItem state='normal' label='ふたつめ' handleClick={() => console.log('b')} />
          <ProjectListItem state='selected' label='みっつめ' handleClick={() => console.log('c')} />
          <ProjectListItem state='normal' label='よっつめ' handleClick={() => console.log('d')} />
          <ProjectListItem state='normal' label='ひとつめ' handleClick={() => console.log('a')} />
          <ProjectListItem state='normal' label='ふたつめ' handleClick={() => console.log('b')} />
          <ProjectListItem state='selected' label='みっつめ' handleClick={() => console.log('c')} />
          <ProjectListItem state='normal' label='よっつめ' handleClick={() => console.log('d')} />
          <ProjectListItem state='normal' label='よっつめ' handleClick={() => console.log('d')} />
          <ProjectListItem state='normal' label='ひとつめ' handleClick={() => console.log('a')} />
          <ProjectListItem state='normal' label='ふたつめ' handleClick={() => console.log('b')} />
          <ProjectListItem state='selected' label='みっつめ' handleClick={() => console.log('c')} />
          <ProjectListItem state='normal' label='よっつめ' handleClick={() => console.log('d')} />
        </div>
      </div>
    </div>
  )
}
