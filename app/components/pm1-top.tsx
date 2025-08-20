import * as React from "react"


const Pm1Top = (props: React.SVGProps<SVGSVGElement> & {
  onPeaceButtonClick?: () => void,
  onChannel1ButtonClick?: () => void,
  onChannel2ButtonClick?: () => void,
  onChannel3ButtonClick?: () => void,
  label?: string
}) => ((({
  onPeaceButtonClick,
  onChannel1ButtonClick,
  onChannel2ButtonClick,
  onChannel3ButtonClick,
  label, ...rest }) => {

  const [activeChannel, setActiveChannel] = React.useState('ch1');
  const [peaceOn, setPeaceOn] = React.useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={899}
      height={424}
      fill="none"
      {...rest}
    >
      <path fill="#F5F5F5" d="M0 0h899v424H0z" />
      <path
        fill="url(#a)"
        d="M0 0h1512v982H0z"
        transform="translate(-107 -255)"
      />
      <rect
        width={898.568}
        height={422.337}
        y={0.468}
        fill="#D8D2CB"
        rx={7.985}
      />
      <g filter="url(#b)">
        <rect
          width={884.713}
          height={409.139}
          x={6.928}
          y={7.067}
          fill="url(#c)"
          rx={1.775}
        />
        <rect
          width={883.826}
          height={408.251}
          x={7.372}
          y={7.511}
          stroke="#A5A5A5"
          strokeWidth={0.887}
          rx={1.331}
        />
      </g>
      <g filter="url(#d)">
        <rect
          width={805.478}
          height={330.226}
          x={46.056}
          y={45.543}
          fill="url(#e)"
          rx={2.662}
        />
      </g>
      <g filter="url(#f)">
        <rect
          width={805.478}
          height={330.226}
          x={46.056}
          y={45.543}
          fill="url(#g)"
          rx={2.662}
        />
      </g>
      <rect
        width={120.528}
        height={80.352}
        x={308.668}
        y={295.418}
        fill="#000"
        rx={0.887}
      />
      <g filter="url(#h)">
        <circle cx={249.875} cy={318.935} r={23.518} fill="#FFA435" />
        <circle
          cx={249.875}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g
        filter="url(#i)"
        role="button"
        aria-label="Peace button"
        tabIndex={0}
        pointerEvents="visible"
        style={{
          cursor: 'pointer',
          outline: 'none',
          // smooth press/hover transitions
          transition: 'transform 80ms ease, filter 120ms ease',
          transformBox: 'fill-box',
          transformOrigin: 'center',
        }}
        onClick={() => {
          setPeaceOn((p) => !p);
          props.onPeaceButtonClick?.();
        }}
        onPointerDown={(e) => {
          const t = e.currentTarget as SVGGElement;
          t.dataset.pressed = 'true';
          t.style.transform = 'scale(0.96)';
          t.style.filter = 'brightness(0.85)';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#FF8F07');
        }}
        onPointerUp={(e) => {
          const t = e.currentTarget as SVGGElement;
          delete t.dataset.pressed;
          t.style.transform = 'scale(1)';
          t.style.filter = '';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#FF8F07');
        }}
      >
        <circle cx={249.875} cy={318.935} r={23.518} fill="#FF8F07" />
        <circle
          cx={249.875}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#j)">
        <circle cx={487.556} cy={318.935} r={23.518} fill="#D8D8D8" />
        <circle
          cx={487.556}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#k)">
        <circle cx={487.556} cy={318.935} r={23.518} fill="#D8D8D8" />
        <circle
          cx={487.556}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#l)">
        <circle cx={568.297} cy={318.935} r={23.518} fill="#D8D8D8" />
        <circle
          cx={568.297}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#m)">
        <circle cx={568.297} cy={318.935} r={23.518} fill="#D8D8D8" />
        <circle
          cx={568.297}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#n)">
        <circle cx={649.037} cy={318.935} r={23.518} fill="#D8D8D8" />
        <circle
          cx={649.037}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#o)">
        <circle cx={649.037} cy={318.935} r={23.518} fill="#D8D8D8" />
        <circle
          cx={649.037}
          cy={318.935}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#p)">
        <circle cx={487.556} cy={318.556} r={23.518} fill="#D8D8D8" />
        <circle
          cx={487.556}
          cy={318.556}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#q)"
        role="button"
        aria-label="Channel1 button"
        tabIndex={0}
        pointerEvents="visible"
        style={{
          cursor: 'pointer',
          outline: 'none',
          // smooth press/hover transitions
          transition: 'transform 80ms ease, filter 120ms ease',
          transformBox: 'fill-box',
          transformOrigin: 'center',
        }}
        onClick={() => {
          if (peaceOn) {
            setActiveChannel('ch1');
            props.onChannel1ButtonClick?.();
          }
        }}
        onPointerDown={(e) => {
          const t = e.currentTarget as SVGGElement;
          t.dataset.pressed = 'true';
          t.style.transform = 'scale(0.96)';
          t.style.filter = 'brightness(0.85)';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#D8D2CB');
        }}
        onPointerUp={(e) => {
          const t = e.currentTarget as SVGGElement;
          delete t.dataset.pressed;
          t.style.transform = 'scale(1)';
          t.style.filter = '';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#D8D2CB');
        }}
      >
        <circle cx={487.556} cy={318.556} r={23.518} fill="#D8D2CB" />
        <circle
          cx={487.556}
          cy={318.556}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#r)">
        <circle cx={568.297} cy={318.556} r={23.518} fill="#D8D8D8" />
        <circle
          cx={568.297}
          cy={318.556}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#s)"
        role="button"
        aria-label="Channel2 button"
        tabIndex={0}
        pointerEvents="visible"
        style={{
          cursor: 'pointer',
          outline: 'none',
          // smooth press/hover transitions
          transition: 'transform 80ms ease, filter 120ms ease',
          transformBox: 'fill-box',
          transformOrigin: 'center',
        }}
        onClick={() => {
          if (peaceOn) {
            setActiveChannel('ch2');
            props.onChannel2ButtonClick?.();
          }
        }}
        onPointerDown={(e) => {
          const t = e.currentTarget as SVGGElement;
          t.dataset.pressed = 'true';
          t.style.transform = 'scale(0.96)';
          t.style.filter = 'brightness(0.85)';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#D8D2CB');
        }}
        onPointerUp={(e) => {
          const t = e.currentTarget as SVGGElement;
          delete t.dataset.pressed;
          t.style.transform = 'scale(1)';
          t.style.filter = '';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#D8D2CB');
        }}
      >
        <circle cx={568.297} cy={318.556} r={23.518} fill="#D8D2CB" />
        <circle
          cx={568.297}
          cy={318.556}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#t)">
        <circle cx={649.037} cy={318.556} r={23.518} fill="#D8D8D8" />
        <circle
          cx={649.037}
          cy={318.556}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#u)"
        role="button"
        aria-label="Channel3 button"
        tabIndex={0}
        pointerEvents="visible"
        style={{
          cursor: 'pointer',
          outline: 'none',
          // smooth press/hover transitions
          transition: 'transform 80ms ease, filter 120ms ease',
          transformBox: 'fill-box',
          transformOrigin: 'center',
        }}
        onClick={() => {
          if (peaceOn) {
            setActiveChannel('ch3');
            props.onChannel3ButtonClick?.();
          }
        }}
        onPointerDown={(e) => {
          const t = e.currentTarget as SVGGElement;
          t.dataset.pressed = 'true';
          t.style.transform = 'scale(0.96)';
          t.style.filter = 'brightness(0.85)';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#D8D2CB');
        }}
        onPointerUp={(e) => {
          const t = e.currentTarget as SVGGElement;
          delete t.dataset.pressed;
          t.style.transform = 'scale(1)';
          t.style.filter = '';
          const mainCircle = t.querySelector('circle');
          if (mainCircle) mainCircle.setAttribute('fill', '#D8D2CB');
        }}
      >
        <circle cx={649.037} cy={318.556} r={23.518} fill="#D8D2CB" />
        <circle
          cx={649.037}
          cy={318.556}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <path
        fill="#2F2F2F"
        d="M234.172 354.95h1.056v.87h.024c.174-.356.448-.613.82-.77a2.991 2.991 0 0 1 1.23-.249c.497 0 .927.091 1.292.273.372.183.679.431.919.746.248.306.435.662.559 1.068.124.406.186.836.186 1.292 0 .455-.062.886-.186 1.292a2.965 2.965 0 0 1-.547 1.068c-.24.298-.546.534-.919.708-.364.174-.791.261-1.279.261-.158 0-.336-.017-.534-.05a2.99 2.99 0 0 1-.572-.161 2.554 2.554 0 0 1-.546-.298 1.835 1.835 0 0 1-.423-.485h-.024v3.304h-1.056v-8.869Zm4.968 3.155c0-.298-.041-.588-.124-.869a2.176 2.176 0 0 0-.36-.77 1.682 1.682 0 0 0-.621-.534 1.846 1.846 0 0 0-.882-.199c-.356 0-.658.07-.907.211a1.805 1.805 0 0 0-.609.559c-.157.223-.273.48-.347.77a3.905 3.905 0 0 0 .012 1.801c.075.29.191.547.348.77.165.224.377.406.633.547.257.132.568.199.932.199.364 0 .667-.071.907-.212.248-.14.447-.327.596-.559.149-.231.257-.496.323-.795.066-.298.099-.604.099-.919Zm6.817-.559a2.092 2.092 0 0 0-.174-.708 1.614 1.614 0 0 0-.385-.571 1.614 1.614 0 0 0-.571-.385 1.694 1.694 0 0 0-.721-.149c-.273 0-.522.049-.745.149a1.64 1.64 0 0 0-.559.385c-.157.166-.282.36-.373.584a2.122 2.122 0 0 0-.161.695h3.689Zm1.019 1.789c-.141.72-.452 1.263-.932 1.627-.48.365-1.085.547-1.814.547-.513 0-.96-.083-1.341-.249a2.637 2.637 0 0 1-.944-.695 3.016 3.016 0 0 1-.584-1.068 5.324 5.324 0 0 1-.211-1.354c0-.489.074-.936.223-1.342.149-.406.357-.758.622-1.056a2.92 2.92 0 0 1 .956-.695 2.957 2.957 0 0 1 1.217-.249c.572 0 1.044.12 1.416.36.381.232.684.53.907.895.232.364.389.762.472 1.192.091.431.129.841.112 1.23h-4.807c-.009.282.025.551.099.807.075.249.195.472.36.671.166.191.377.344.634.46.257.116.559.174.907.174.447 0 .811-.104 1.093-.311.29-.207.48-.522.571-.944h1.044Zm6.883 2.012c-.183.108-.435.162-.758.162-.273 0-.493-.075-.659-.224-.157-.157-.236-.41-.236-.757-.289.347-.629.6-1.018.757a3.38 3.38 0 0 1-1.242.224c-.29 0-.568-.033-.833-.1a1.913 1.913 0 0 1-.67-.31 1.557 1.557 0 0 1-.46-.547 1.957 1.957 0 0 1-.161-.832c0-.364.062-.662.186-.894.124-.232.286-.418.484-.559a2.27 2.27 0 0 1 .696-.336c.265-.074.534-.136.807-.186.29-.058.564-.099.82-.124.265-.033.497-.075.696-.124.199-.058.356-.137.472-.236.116-.108.174-.261.174-.46 0-.232-.046-.418-.137-.559a.839.839 0 0 0-.335-.323 1.325 1.325 0 0 0-.46-.149 3.316 3.316 0 0 0-.497-.037c-.447 0-.82.087-1.118.261-.298.165-.459.484-.484.956h-1.056c.017-.397.099-.733.248-1.006a1.83 1.83 0 0 1 .597-.658c.248-.174.53-.299.844-.373a4.55 4.55 0 0 1 1.031-.112c.29 0 .576.021.857.062.29.042.551.129.783.261.232.124.418.302.559.534.141.232.211.534.211.907v3.304c0 .249.013.431.037.547.034.116.133.174.299.174.091 0 .198-.021.323-.062v.819Zm-1.715-3.291a1.369 1.369 0 0 1-.521.223c-.216.042-.443.079-.684.112-.231.025-.467.058-.708.099-.24.033-.455.091-.645.174a1.21 1.21 0 0 0-.473.36c-.115.15-.173.357-.173.622 0 .173.033.323.099.447a.991.991 0 0 0 .273.285c.116.075.249.129.398.162.149.033.306.05.472.05.348 0 .646-.046.894-.137.249-.099.451-.219.609-.36a1.53 1.53 0 0 0 .348-.472c.074-.174.111-.336.111-.485v-1.08Zm7.057-1.044c-.083-.406-.256-.72-.521-.944-.265-.223-.622-.335-1.069-.335-.381 0-.699.07-.956.211a1.755 1.755 0 0 0-.621.559 2.426 2.426 0 0 0-.323.807 4.24 4.24 0 0 0-.1.932c0 .298.033.588.1.869.074.282.186.535.335.758.149.215.344.389.584.522.24.132.526.199.857.199.522 0 .928-.137 1.217-.41.298-.274.481-.659.547-1.156h1.081c-.116.795-.414 1.408-.895 1.839-.472.431-1.118.646-1.938.646a3.4 3.4 0 0 1-1.304-.236 2.599 2.599 0 0 1-.944-.671 3.037 3.037 0 0 1-.571-1.031 4.531 4.531 0 0 1-.187-1.329c0-.48.063-.928.187-1.342.124-.422.31-.786.559-1.093a2.62 2.62 0 0 1 .956-.733c.381-.182.824-.273 1.329-.273.365 0 .704.046 1.019.137.323.083.604.215.845.397.248.182.451.414.608.696.158.273.257.6.298.981h-1.093Zm6.771.534a2.046 2.046 0 0 0-.174-.708 1.614 1.614 0 0 0-.385-.571 1.605 1.605 0 0 0-.571-.385 1.686 1.686 0 0 0-.72-.149c-.274 0-.522.049-.746.149a1.65 1.65 0 0 0-.559.385c-.157.166-.281.36-.372.584a2.148 2.148 0 0 0-.162.695h3.689Zm1.019 1.789c-.141.72-.451 1.263-.932 1.627-.48.365-1.084.547-1.813.547-.514 0-.961-.083-1.342-.249a2.646 2.646 0 0 1-.944-.695 3.032 3.032 0 0 1-.584-1.068 5.369 5.369 0 0 1-.211-1.354c0-.489.075-.936.224-1.342a3.26 3.26 0 0 1 .621-1.056 2.92 2.92 0 0 1 .956-.695 2.961 2.961 0 0 1 1.218-.249c.571 0 1.043.12 1.416.36.381.232.683.53.907.895.231.364.389.762.472 1.192.091.431.128.841.111 1.23h-4.807c-.008.282.025.551.1.807.074.249.194.472.36.671.165.191.377.344.633.46.257.116.559.174.907.174.447 0 .812-.104 1.093-.311.29-.207.48-.522.572-.944h1.043Z"
      />
      <g filter="url(#v)">
        <path
          fill="url(#w)"
          d="M690.29 375.78h117.119v46.137c0 .98-.795 1.775-1.775 1.775h-113.57c-.98 0-1.774-.795-1.774-1.775V375.78Z"
        />
      </g>
      <g filter="url(#x)">
        <path fill="url(#y)" d="M146.985 375.769h16.658v19.598h-16.658z" />
      </g>
      <circle
        cx={487.994}
        cy={358.034}
        r={3.327}
        fill="url(#z)"
        stroke="#A8A8A8"
        strokeWidth={0.444}
      />
      <circle
        cx={649.476}
        cy={358.034}
        r={3.327}
        fill="url(#z)"
        stroke="#A8A8A8"
        strokeWidth={0.444}
      />
      <circle
        cx={568.735}
        cy={358.034}
        r={3.327}
        fill="url(#A)"
        stroke="#A8A8A8"
        strokeWidth={0.444}
      />
      {peaceOn && activeChannel === 'ch1' && (
        <g filter="url(#LED1)">
          <circle cx={487.994} cy={358.034} r={3.549} fill="#fff" />
        </g>
      )}
      {peaceOn && activeChannel === 'ch2' && (
        <g filter="url(#LED2)">
          <circle cx={568.735} cy={358.034} r={3.549} fill="#fff" />
        </g>
      )}
      {peaceOn && activeChannel === 'ch3' && (
        <g filter="url(#LED3)">
          <circle cx={649.476} cy={358.034} r={3.549} fill="#fff" />
        </g>
      )}
      <g filter="url(#C)">
        <circle cx={249.875} cy={212.126} r={23.518} fill="#D8D2CB" />
        <circle
          cx={249.875}
          cy={212.126}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#D)">
        <circle cx={648.695} cy={212.126} r={23.518} fill="#D8D2CB" />
        <circle
          cx={648.695}
          cy={212.126}
          r={23.961}
          stroke="#5E5E5E"
          strokeWidth={0.887}
        />
      </g>
      <g filter="url(#E)">
        <rect
          width={431.156}
          height={32.508}
          x={233.216}
          y={195.468}
          fill="#F33"
          rx={14.717}
        />
      </g>
      <ellipse cx={648.546} cy={211.722} fill="#FAFF00" rx={15.826} ry={16.254} />
      <ellipse cx={249.897} cy={211.722} fill="#FAFF00" rx={16.682} ry={16.254} />
      <g filter="url(#F)">
        <rect
          width={431.156}
          height={32.508}
          x={233.216}
          y={195.468}
          fill="url(#G)"
          rx={14.717}
        />
      </g>
      <text
        style={{
          cursor: 'default',
          outline: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          pointerEvents: 'none',
        }} // make the text unselectable
        x={369}
        y={328}
        fill="#fff"
        fontFamily="'Kroeger 07_55', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'"
        fontSize={14.2}
        textAnchor="middle"
        dominantBaseline="middle"
        aria-label={props.label ?? ''}
      >
        {props.label ?? ''}
      </text>
      <path
        fill="#9A9A9A"
        d="M891.698 208.087h7.098v3.549h-7.098zM0 208.087h7.098v3.549H0z"
      />
      <defs>
        <filter
          id="b"
          width={888.085}
          height={412.51}
          x={5.242}
          y={5.381}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.843} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="d"
          width={931.469}
          height={456.217}
          x={-16.939}
          y={41.994}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.645} />
          <feGaussianBlur stdDeviation={0.872} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0674749 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={3.953} />
          <feGaussianBlur stdDeviation={2.095} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0969343 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={7.444} />
          <feGaussianBlur stdDeviation={3.944} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={13.278} />
          <feGaussianBlur stdDeviation={7.035} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.143066 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={24.835} />
          <feGaussianBlur stdDeviation={13.159} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.172525 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={59.447} />
          <feGaussianBlur stdDeviation={31.498} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
          <feBlend
            in2="effect5_dropShadow_55_2"
            result="effect6_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect6_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="f"
          width={805.478}
          height={330.226}
          x={46.056}
          y={45.543}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={1.775}
            result="effect1_innerShadow_55_2"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2.218} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_55_2" />
        </filter>
        <filter
          id="h"
          width={190.772}
          height={190.772}
          x={154.49}
          y={252.829}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.006} />
          <feGaussianBlur stdDeviation={1.219} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.544} />
          <feGaussianBlur stdDeviation={3.083} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.186358 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={5.189} />
          <feGaussianBlur stdDeviation={6.289} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233642 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10.688} />
          <feGaussianBlur stdDeviation={12.955} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.289792 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={29.28} />
          <feGaussianBlur stdDeviation={35.49} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="i"
          width={52.359}
          height={53.246}
          x={223.696}
          y={292.756}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="j"
          width={190.772}
          height={190.772}
          x={392.17}
          y={252.829}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.006} />
          <feGaussianBlur stdDeviation={1.219} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.544} />
          <feGaussianBlur stdDeviation={3.083} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.186358 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={5.189} />
          <feGaussianBlur stdDeviation={6.289} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233642 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10.688} />
          <feGaussianBlur stdDeviation={12.955} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.289792 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={29.28} />
          <feGaussianBlur stdDeviation={35.49} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="k"
          width={52.359}
          height={53.246}
          x={461.376}
          y={292.756}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="l"
          width={190.772}
          height={190.772}
          x={472.911}
          y={252.829}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.006} />
          <feGaussianBlur stdDeviation={1.219} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.544} />
          <feGaussianBlur stdDeviation={3.083} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.186358 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={5.189} />
          <feGaussianBlur stdDeviation={6.289} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233642 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10.688} />
          <feGaussianBlur stdDeviation={12.955} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.289792 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={29.28} />
          <feGaussianBlur stdDeviation={35.49} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="m"
          width={52.359}
          height={53.246}
          x={542.117}
          y={292.756}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="n"
          width={190.772}
          height={190.772}
          x={553.652}
          y={252.829}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.006} />
          <feGaussianBlur stdDeviation={1.219} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.544} />
          <feGaussianBlur stdDeviation={3.083} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.186358 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={5.189} />
          <feGaussianBlur stdDeviation={6.289} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233642 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10.688} />
          <feGaussianBlur stdDeviation={12.955} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.289792 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={29.28} />
          <feGaussianBlur stdDeviation={35.49} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="o"
          width={52.359}
          height={53.246}
          x={622.858}
          y={292.756}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="p"
          width={190.772}
          height={190.772}
          x={392.17}
          y={252.45}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.006} />
          <feGaussianBlur stdDeviation={1.219} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.544} />
          <feGaussianBlur stdDeviation={3.083} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.186358 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={5.189} />
          <feGaussianBlur stdDeviation={6.289} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233642 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10.688} />
          <feGaussianBlur stdDeviation={12.955} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.289792 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={29.28} />
          <feGaussianBlur stdDeviation={35.49} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="q"
          width={52.359}
          height={53.246}
          x={461.376}
          y={292.377}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="r"
          width={190.772}
          height={190.772}
          x={472.911}
          y={252.45}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.006} />
          <feGaussianBlur stdDeviation={1.219} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.544} />
          <feGaussianBlur stdDeviation={3.083} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.186358 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={5.189} />
          <feGaussianBlur stdDeviation={6.289} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233642 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10.688} />
          <feGaussianBlur stdDeviation={12.955} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.289792 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={29.28} />
          <feGaussianBlur stdDeviation={35.49} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="s"
          width={52.359}
          height={53.246}
          x={542.117}
          y={292.377}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="t"
          width={190.772}
          height={190.772}
          x={553.652}
          y={252.45}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.006} />
          <feGaussianBlur stdDeviation={1.219} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.544} />
          <feGaussianBlur stdDeviation={3.083} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.186358 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={5.189} />
          <feGaussianBlur stdDeviation={6.289} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233642 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10.688} />
          <feGaussianBlur stdDeviation={12.955} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.289792 0" />
          <feBlend
            in2="effect3_dropShadow_55_2"
            result="effect4_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={29.28} />
          <feGaussianBlur stdDeviation={35.49} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
          <feBlend
            in2="effect4_dropShadow_55_2"
            result="effect5_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="u"
          width={52.359}
          height={53.246}
          x={622.858}
          y={292.377}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="v"
          width={139.478}
          height={70.271}
          x={679.11}
          y={368.149}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={1.775}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={3.549} />
          <feGaussianBlur stdDeviation={4.702} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={14.196} />
          <feGaussianBlur stdDeviation={2.218} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-15.084} />
          <feGaussianBlur stdDeviation={2.218} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
        </filter>
        <filter
          id="x"
          width={16.658}
          height={21.372}
          x={146.985}
          y={375.769}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={1.775}
            result="effect1_innerShadow_55_2"
          />
          <feOffset dy={1.775} />
          <feGaussianBlur stdDeviation={1.109} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_55_2" />
        </filter>
        <filter
          id="LED1"
          width={23.601}
          height={23.601}
          x={476.194}
          y={346.234}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={1.775}
            result="effect1_dropShadow_55_2"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3.239} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="LED2"
          width={23.601}
          height={23.601}
          x={556.676}
          y={346.234}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={1.775}
            result="effect1_dropShadow_55_2"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3.239} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="LED3"
          width={23.601}
          height={23.601}
          x={637.6755}
          y={346.234}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={1.775}
            result="effect1_dropShadow_55_2"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3.239} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="C"
          width={52.359}
          height={53.246}
          x={223.696}
          y={185.947}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="D"
          width={52.359}
          height={53.246}
          x={622.515}
          y={185.947}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.887}
            result="effect1_dropShadow_55_2"
          />
          <feOffset dy={0.887} />
          <feGaussianBlur stdDeviation={0.444} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_55_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1.775} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.662} />
          <feGaussianBlur stdDeviation={0.887} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
        </filter>
        <filter
          id="E"
          width={555.091}
          height={171.935}
          x={171.248}
          y={195.468}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.143} />
          <feGaussianBlur stdDeviation={0.857} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0787208 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={17.302} />
          <feGaussianBlur stdDeviation={6.921} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_dropShadow_55_2"
            result="effect2_dropShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={77.459} />
          <feGaussianBlur stdDeviation={30.984} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" />
          <feBlend
            in2="effect2_dropShadow_55_2"
            result="effect3_dropShadow_55_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect3_dropShadow_55_2"
            result="shape"
          />
        </filter>
        <filter
          id="F"
          width={446.57}
          height={37.93}
          x={225.47}
          y={192.524}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={3.098} />
          <feGaussianBlur stdDeviation={1.239} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_55_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={7.746} />
          <feGaussianBlur stdDeviation={3.834} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="effect1_innerShadow_55_2"
            result="effect2_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-1.549} dy={-3.873} />
          <feGaussianBlur stdDeviation={1.472} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="effect2_innerShadow_55_2"
            result="effect3_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-0.775} />
          <feGaussianBlur stdDeviation={3.331} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="effect3_innerShadow_55_2"
            result="effect4_innerShadow_55_2"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-7.746} />
          <feGaussianBlur stdDeviation={3.912} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="effect4_innerShadow_55_2"
            result="effect5_innerShadow_55_2"
          />
        </filter>
        <linearGradient
          id="a"
          x1={756}
          x2={756}
          y1={982}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6D6D6" />
          <stop offset={1} stopColor="#B7B7B7" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={449.285}
          x2={449.285}
          y1={7.067}
          y2={416.206}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9F6F2" />
          <stop offset={1} stopColor="#D8D2CB" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={448.795}
          x2={448.795}
          y1={45.543}
          y2={375.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7F4F0" />
          <stop offset={1} stopColor="#EDE9E3" />
        </linearGradient>
        <linearGradient
          id="g"
          x1={448.795}
          x2={448.795}
          y1={45.543}
          y2={375.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7F4F0" />
          <stop offset={1} stopColor="#D8D2CB" />
        </linearGradient>
        <linearGradient
          id="w"
          x1={748.312}
          x2={748.312}
          y1={423.692}
          y2={375.78}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D3CFC8" />
          <stop offset={1} stopColor="#505050" />
        </linearGradient>
        <linearGradient
          id="y"
          x1={155.238}
          x2={155.238}
          y1={395.367}
          y2={375.769}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#3B3A3A" />
        </linearGradient>
        <linearGradient
          id="G"
          x1={448.794}
          x2={448.794}
          y1={195.468}
          y2={227.976}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.085} stopColor="#383838" />
          <stop offset={0.25} stopColor="#fff" />
          <stop offset={0.62} stopColor="#3A3A3A" />
        </linearGradient>
        <radialGradient
          id="z"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(90 145.721 503.755) scale(3.54905)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6D6D6" />
          <stop offset={1} stopColor="#CECECE" />
        </radialGradient>
        <radialGradient
          id="A"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(90 105.35 463.385) scale(3.54905)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6D6D6" />
          <stop offset={1} stopColor="#CECECE" />
        </radialGradient>
      </defs>
    </svg>
  )
}))(props)

export default Pm1Top;
