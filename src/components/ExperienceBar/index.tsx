import * as S from "./styles";

export function ExperienceBar () {
    return (
        <S.Header>
            <span>0 xp</span>
            <S.CurrentExperience>
                <div style={{width: '50%'}}></div>
                <span style={{left: '50%'}}>300 px</span>
            </S.CurrentExperience>
            <span>600 xp</span>
        </S.Header>
    )
}