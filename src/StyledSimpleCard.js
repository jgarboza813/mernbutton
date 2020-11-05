import styled from "styled-components";
import { transparentize, darken } from "polished";

const StyledSimpleCard = styled.div`
  position: relative;
  background-color: transparent;
  height: 192px;
  cursor: pointer;
  color: #001738;
  transition: height ${({ easeSpeed }) => easeSpeed}s
    ${({ easeFunction }) => easeFunction}, transform ${({ easeSpeed }) =>
    2 * easeSpeed}s
    ${({ easeFunction }) => easeFunction} 0.5s, opacity ${({ easeSpeed }) =>
    2 * easeSpeed}s
    ${({ easeFunction }) => easeFunction} 0.5s;
  text-align: center;
  opacity: 0;
  transform: translateY(8px);

  &.fade-in {
      transform: translateY(0);
      opacity: 1;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ cardColor }) => cardColor};
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid ${({ borderColor }) => borderColor};
    /* box-shadow: 0 4px 6px -10px ${({ shadowColor }) =>
    transparentize(0.875, darken(0.125, shadowColor))},
      0 2px 12px -14px ${({ shadowColor }) =>
    transparentize(0.625, darken(0.125, shadowColor))}; */
    transition: all ${({ easeSpeed }) => easeSpeed}s
      ${({ easeFunction }) => easeFunction};
  }

  .card__content {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform ${({ easeSpeed }) => easeSpeed}s
      ${({ easeFunction }) => easeFunction};

    .card__title {
      margin: 0 auto;
      width: 104px;
    }

    p {
      transition: color ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
    }

    &.loading {
      .card__logo-wrapper {
        animation: translate-y ${({ easeSpeed }) => 2 * easeSpeed}s
          ${({ easeFunction }) => easeFunction} forwards;
      }

      .card__logo {
        animation: loading-lg ${({ easeSpeed }) => 2 * easeSpeed}s
          ${({ easeFunction }) => easeFunction} forwards;
      }

      .card__title {
        animation: loading-sm-y ${({ easeSpeed }) => 2 * easeSpeed}s
          ${({ easeFunction }) => easeFunction} forwards;
      }
    }

    @keyframes translate-y {
      to {
        transform: translateY(24px);
      }
    }

    @keyframes loading-lg {
      to {
        opacity: 0;
      }
    }

    @keyframes loading-sm-y {
      to {
        transform: translateY(4px);
        opacity: 0;
      }
    }
  }

  path {
    transition: fill ${({ easeSpeed }) => easeSpeed}s
      ${({ easeFunction }) => easeFunction};
  }

  .card__logo-wrapper {
    position: relative;
    top: 0;
    margin: 24px auto 16px;
    width: 56px;
    height: 56px;
    display: block;

    .card__logo {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: transparent;
      transition: background-color ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
    }

    svg {
      position: relative;
      width: 56px;
      height: 56px;
      margin: auto;
    }

    path {
      transition: fill ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
      fill: ${({ iconColor }) => iconColor};
    }
  }

  .card__counter {
    position: absolute;
    transition: color ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
    color: ${({ iconColor }) => iconColor};
    bottom: 12px;
    width: 100%;
    margin: 0;
    display: block;
  }

  button {
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color ${({ easeSpeed }) => easeSpeed}s
      ${({ easeFunction }) => easeFunction};

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: content-box;
      transition: transform ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
    }

    svg {
      position: relative;
      width: 100%;
      height: 100%;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:active span {
      transform: scale(0.75);
    }
  }

  .card__favorited {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    width: 32px;
    height: 32px;

    path {
      transition: fill ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
    }
  }

  .card__options {
    position: absolute;
    bottom: 4px;
    right: 4px;
    padding: 8px;
    width: 32px;
    height: 32px;

    svg {
      transition: opacity ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
    }

    path {
      transition: fill ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
      fill: ${({ iconColor }) => iconColor};
    }
  }

  &:hover {
    &::before {
      transform: scale(1.05, 1.0375);
      border-color: ${({ iconColor }) => iconColor};
      /* box-shadow: 0 4px 6px -2px ${({ shadowColor }) =>
    transparentize(0.875, darken(0.125, shadowColor))},
        0 2px 12px 0
          ${({ shadowColor }) =>
    transparentize(0.625, darken(0.125, shadowColor))}; */
    }

    .avatar--zoom {
      transform: scale(1.25);
    }
  }

  /* card--wide */

  &.card--wide {
    height: 88px;
    grid-column: auto / span 2;
    padding: 16px;
    box-sizing: border-box;

    /* ::before {
      border-color: ${({ cardColor }) => cardColor};
    } */

    &:hover::before {
      border-color: ${({ borderColor }) => borderColor};
      box-shadow: none;
    }

    .card__content {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      padding: 0;

      &.loading {
        .card__logo-wrapper {
          animation: translate-x ${({ easeSpeed }) => 2 * easeSpeed}s
            ${({ easeFunction }) => easeFunction} forwards;
        }

        .card__title {
          animation: loading-sm-x ${({ easeSpeed }) => 2 * easeSpeed}s
            ${({ easeFunction }) => easeFunction} forwards;
        }
      }

      @keyframes translate-x {
        to {
          transform: translateX(24px);
        }
      }

      @keyframes loading-sm-x {
        to {
          transform: translateX(4px);
          opacity: 0;
        }
      }
    }

    .card__logo-wrapper {
      margin: 0 10px 0 0;

      span div {
        background: ${({ textColor }) => textColor};
      }
    }

    .card__title {
      position: relative;
      width: calc(100% - 66px - 32px);
      height: 32px;
      text-align: left;
      margin: 0;
    }

    .card__counter {
      position: relative;
      bottom: 0;
      color: ${({ subtitle }) => subtitle};
    }
  }

  &:hover {
    &.card--wide::before {
      transform: scale(1.0225, 1.0625);
    }
  }

  &.add-pipe {
    &::before,
    &:hover::before {
      background: transparent;
      box-shadow: none;
    }

    &::before {
      border: none;
      border: 2px dashed transparent;
      transition: border-color ${({ easeSpeed }) => easeSpeed}s
        ${({ easeFunction }) => easeFunction};
    }

    &:hover::before {
      transform: none;
      border-color: ${({ borderColor }) => borderColor};
    }

    .card__content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .card__logo-wrapper,
    .card__logo,
    .card__logo svg {
      width: 72px;
      height: 72px;
    }

    .card__logo-wrapper {
      margin: 0 0 10px 0;
    }

    .card__counter {
      position: relative;
      bottom: 0;
    }
  }
`;

export default StyledSimpleCard;