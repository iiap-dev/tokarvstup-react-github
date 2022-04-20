export interface IStudyDetailsProps {
  isMobile: boolean;
  id?: string;
}

// STYLES
export interface IMobile { isMobile: boolean }
export interface ITitle extends IMobile {}
export interface ISubTitle extends IMobile {}
export interface IDescription extends IMobile {}
