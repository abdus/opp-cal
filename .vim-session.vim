let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Dev/personal/opp-cal__personal
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +52 ~/Dev/personal/opp-cal__personal/components/Calendar/index.tsx
badd +78 ~/Dev/personal/opp-cal__personal/components/Calendar/calendar.module.css
argglobal
%argdel
edit ~/Dev/personal/opp-cal__personal/components/Calendar/index.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=11
setlocal fml=1
setlocal fdn=20
setlocal fen
30
normal! zo
45
normal! zo
46
normal! zo
51
normal! zo
52
normal! zo
53
normal! zo
62
normal! zo
63
normal! zo
65
normal! zo
70
normal! zo
71
normal! zo
78
normal! zo
85
normal! zo
91
normal! zo
92
normal! zo
93
normal! zo
let s:l = 52 - ((36 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
52
normal! 056|
wincmd w
argglobal
if bufexists("~/Dev/personal/opp-cal__personal/components/Calendar/calendar.module.css") | buffer ~/Dev/personal/opp-cal__personal/components/Calendar/calendar.module.css | else | edit ~/Dev/personal/opp-cal__personal/components/Calendar/calendar.module.css | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
73
normal! zo
78
normal! zo
82
normal! zo
86
normal! zo
let s:l = 78 - ((77 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
78
normal! 017|
wincmd w
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
