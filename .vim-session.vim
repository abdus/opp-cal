let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Dev/personal/opp-cal__personal
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +37 ~/Dev/personal/opp-cal__personal/components/FileUpload/index.tsx
badd +55 ~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css
badd +1 components/Dropdown/dropdown.module.css
argglobal
%argdel
edit components/Dropdown/dropdown.module.css
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 79 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 79 + 119) / 239)
exe 'vert 3resize ' . ((&columns * 79 + 119) / 239)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
63
normal! zo
let s:l = 63 - ((62 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
63
normal! 0
wincmd w
argglobal
if bufexists("~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css") | buffer ~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css | else | edit ~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
21
normal! zo
33
normal! zo
37
normal! zo
let s:l = 40 - ((30 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
40
normal! 03|
wincmd w
argglobal
if bufexists("~/Dev/personal/opp-cal__personal/components/FileUpload/index.tsx") | buffer ~/Dev/personal/opp-cal__personal/components/FileUpload/index.tsx | else | edit ~/Dev/personal/opp-cal__personal/components/FileUpload/index.tsx | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=8
setlocal fml=1
setlocal fdn=20
setlocal fen
14
normal! zo
19
normal! zo
31
normal! zo
49
normal! zo
50
normal! zo
52
normal! zo
53
normal! zo
67
normal! zo
let s:l = 27 - ((18 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
27
normal! 020|
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 79 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 79 + 119) / 239)
exe 'vert 3resize ' . ((&columns * 79 + 119) / 239)
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
